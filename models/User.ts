import mongoose from "mongoose";

export interface User {
  username: string;
  password: string;
  role: string;
  name: string;
  family: string;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String },
  name: { type: String },
  family: { type: String },
});
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
