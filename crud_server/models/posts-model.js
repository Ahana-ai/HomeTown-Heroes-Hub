import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    images: [String],
    text: String,
    caption: {
      type: String,
      default: "",
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [CommentSchema], 
    shares: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
