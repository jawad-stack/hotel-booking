import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    isAdmin: {
      type: "boolean",
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
