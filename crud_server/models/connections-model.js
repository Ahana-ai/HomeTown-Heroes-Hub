import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema(
  {
    userId: String,
    connectionId: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Connections = mongoose.model("connections", ConnectionSchema);
export default Connections;
