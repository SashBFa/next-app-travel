import { Request, Response } from "express";
import { Types } from "mongoose";
import fs from "fs";
import { promisify } from "util";
import PostModel from "./../models/post.model";
import UserModel from "./../models/user.model";
import { uploadErrors } from "./../utils/errors.utils";

const pipeline = promisify(require("stream").pipeline);

export const readPost = (req: Request, res: Response) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get date : " + err);
  }).sort({ created: -1 });
};

export const createPost = async (req: Request, res: Response) => {
  let fileName;
  if (req.file != null) {
    try {
      if (
        req.file.mimetype != "image/jpg" &&
        req.file.mimetype != "image/png" &&
        req.file.mimetype != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body.posterId + Date.now() + ".jpg";
    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/posts/${fileName}`
      )
    );
  }
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    picture: req.file != null ? "./uploads/posts/" + fileName : "",
    video: req.body.video,
    likers: [],
    comments: [],
  });
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const updatePost = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };
  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

export const deletePost = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  PostModel.findByIdAndRemove(req.params.id, (err: any, docs: any) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};

export const likePost = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true }
    )
      .then()
      .catch((err) => res.status(400).send({ message: err }));
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const unlikePost = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true }
    )
      .then()
      .catch((err) => res.status(400).send({ message: err }));
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const commentPost = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true }
    )
      .then((docs) => res.status(201).send(docs))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const editCommentPost = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    return PostModel.findById(req.params.id, (err: any, docs: any) => {
      const theComment = docs.comments.find((comment: any) =>
        comment._id.equals(req.body.commentId)
      );
      if (!theComment) return res.status(400).send("Comment not found");
      theComment.text = req.body.text;

      return docs.save((err: any) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
export const deleteCommentPost = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true }
    )
      .then((docs) => res.status(201).send(docs))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};
