import mongoose from "mongoose";

const FollowerSchema = new mongoose.Schema(
  {
    userId: String,
    followingId: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Followers = mongoose.model("followers", FollowerSchema);
export default Followers;
