import mongoose from "mongoose";
import User from "./user.interface";

const userSchema = new mongoose.Schema(
  {
    email: String,
    firstname: String,
    lastname: String,
    password: {
      type: String,
      get: (): undefined => undefined,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
