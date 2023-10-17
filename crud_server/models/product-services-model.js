import mongoose from "mongoose";

const strReq = {
  type: String,
  required: true,
};

const prodSchema = new mongoose.Schema({
  type: strReq,
  name: strReq,
  description: strReq,
  category: strReq,
  images: String,
  price: {
    type: Number,
    required: true,
  },
  availability: Boolean,
  available_number: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const prod = mongoose.model("prod-services", prodSchema);

export default prod;
