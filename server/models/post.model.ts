import mongoose, { Schema, Document, Model } from "mongoose";

interface IPost {
  posterId: string;
  message: string;
  picture: string;
  video: string;
  likers: [string];
  comments: [string];
}

interface IPostDocument extends IPost, Document {}

interface IPostModel extends Model<IPostDocument> {
  login: (email: string, password: string) => Promise<IPostDocument>;
}

const PostSchema: Schema<IPostDocument> = new Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    picture: {
      type: String,
    },
    video: {
      type: String,
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<IPostDocument, IPostModel>("post", PostSchema);

export default PostModel;
