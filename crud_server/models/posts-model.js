import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: String,
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
    comments: {
      type: Number,
      default: 0,
    },
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

const Post = mongoose.model("posts", PostSchema);
export default Post;
