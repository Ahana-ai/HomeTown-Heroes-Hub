import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        queries:String,
        subject:String,
        queries:String,
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Feedbacks = mongoose.model("feedback", ConnectionSchema);
export default Feedbacks;
