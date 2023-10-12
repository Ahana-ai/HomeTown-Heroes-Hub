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
  acheivement: strReq,
  talents: strReq,
  bio: strReq,
  profile_image: {
    type: String,
    // required: true,
  },
  social_media_links: strReq,
  profile_completion_score: {
    type: Number,
    // required: true,
    default: 0,
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
