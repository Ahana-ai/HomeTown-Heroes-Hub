import mongoose from "mongoose";

const strReq = {
  type: String,
  required: true,
};

const userSchema = new mongoose.Schema({
  name: strReq,
  email: strReq,
  password: strReq,
  role: strReq,
  age: {
    type: Number,
    required: true,
  },
  location: strReq,
  achievement: String,
  talents: String,
  bio: String,
  profile_image: {
    type: String,
    default: "",
  },
  cover_image: {
    type: String,
    default: "",
  },
  prod_services: String,
  school_university_name: String,
  social_media_links: String,
  profile_completion_score: {
    type: Number,
    // required: true,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.options.toJSON = {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
};

const user = mongoose.model("users", userSchema);

export default user;
