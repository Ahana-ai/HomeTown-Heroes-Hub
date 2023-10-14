import mongoose from "mongoose";

const FeedSchema = new mongoose.Schema(
  {
    images: String,
    text: String,
    videos: String,
  },
  {
    timestamps: true,
  }
);

const Feed = mongoose.model("feeds", FeedSchema);
export default Feed;
