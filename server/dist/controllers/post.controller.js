"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentPost = exports.editCommentPost = exports.commentPost = exports.unlikePost = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.readPost = void 0;
const mongoose_1 = require("mongoose");
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const post_model_1 = __importDefault(require("./../models/post.model"));
const user_model_1 = __importDefault(require("./../models/user.model"));
const errors_utils_1 = require("./../utils/errors.utils");
const pipeline = (0, util_1.promisify)(require("stream").pipeline);
const readPost = (req, res) => {
    post_model_1.default.find((err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log("Error to get date : " + err);
    }).sort({ created: -1 });
};
exports.readPost = readPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let fileName;
    if (req.file != null) {
        try {
            if (req.file.mimetype != "image/jpg" &&
                req.file.mimetype != "image/png" &&
                req.file.mimetype != "image/jpeg")
                throw Error("invalid file");
            if (req.file.size > 500000)
                throw Error("max size");
        }
        catch (err) {
            const errors = (0, errors_utils_1.uploadErrors)(err);
            return res.status(201).json({ errors });
        }
        fileName = req.body.posterId + Date.now() + ".jpg";
        yield pipeline(req.file.stream, fs_1.default.createWriteStream(`${__dirname}/../client/public/uploads/posts/${fileName}`));
    }
    const newPost = new post_model_1.default({
        posterId: req.body.posterId,
        message: req.body.message,
        picture: req.file != null ? "./uploads/posts/" + fileName : "",
        video: req.body.video,
        likers: [],
        comments: [],
    });
    try {
        const post = yield newPost.save();
        return res.status(201).json(post);
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    const updatedRecord = {
        message: req.body.message,
    };
    post_model_1.default.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log("Update error : " + err);
    });
};
exports.updatePost = updatePost;
const deletePost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    post_model_1.default.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log("Delete error : " + err);
    });
};
exports.deletePost = deletePost;
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield post_model_1.default.findByIdAndUpdate(req.params.id, {
            $addToSet: { likers: req.body.id },
        }, { new: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.body.id, {
            $addToSet: { likes: req.params.id },
        }, { new: true })
            .then((docs) => res.status(201).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
exports.likePost = likePost;
const unlikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield post_model_1.default.findByIdAndUpdate(req.params.id, {
            $pull: { likers: req.body.id },
        }, { new: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.body.id, {
            $pull: { likes: req.params.id },
        }, { new: true })
            .then((docs) => res.status(201).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
exports.unlikePost = unlikePost;
const commentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return post_model_1.default.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: {
                    commenterId: req.body.commenterId,
                    commenterPseudo: req.body.commenterPseudo,
                    text: req.body.text,
                    timestamp: new Date().getTime(),
                },
            },
        }, { new: true })
            .then((docs) => res.status(201).send(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.commentPost = commentPost;
const editCommentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return post_model_1.default.findById(req.params.id, (err, docs) => {
            const theComment = docs.comments.find((comment) => comment._id.equals(req.body.commentId));
            if (!theComment)
                return res.status(400).send("Comment not found");
            theComment.text = req.body.text;
            return docs.save((err) => {
                if (!err)
                    return res.status(200).send(docs);
                return res.status(500).send(err);
            });
        });
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.editCommentPost = editCommentPost;
const deleteCommentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return post_model_1.default.findByIdAndUpdate(req.params.id, {
            $pull: {
                comments: {
                    _id: req.body.commentId,
                },
            },
        }, { new: true })
            .then((docs) => res.status(201).send(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.deleteCommentPost = deleteCommentPost;
//# sourceMappingURL=post.controller.js.map