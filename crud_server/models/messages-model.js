import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const msg = mongoose.model("messages", MessageSchema);

export default msg;
