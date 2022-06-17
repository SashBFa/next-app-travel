import { Request, Response } from "express";
import UserModel from "./../models/user.model";
import { Types } from "mongoose";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserModel.find().select("-password");
  res.status(200).send(users);
};

export const userInfo = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err: string, docs: string) => {
    !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
  }).select("-password");
};

export const updateUser = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const follow = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  } else if (!Types.ObjectId.isValid(req.body.idToFollow)) {
    return res.status(400).send("Follow unknown : " + req.body.idToFollow);
  }
  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true }
    )
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(400).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true }
    )
      .then()
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const unfollow = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  } else if (!Types.ObjectId.isValid(req.body.idToUnfollow)) {
    return res.status(400).send("Unfollow unknown : " + req.body.idToUnfollow);
  }
  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow } },
      { new: true, upsert: true }
    )
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(400).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      { $pull: { followers: req.params.id } },
      { new: true, upsert: true }
    )
      .then()
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
