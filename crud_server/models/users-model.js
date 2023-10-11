import mongoose from "mongoose";

const strReq = {
  type: String,
  required: true,
};

const userSchema = new mongoose.Schema({
  name: strReq,
  email: strReq,
  password: strReq,
});

userSchema.options.toJSON = {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
};

const user = mongoose.model("users", userSchema);

export default user;
