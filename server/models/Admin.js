import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    Name: String,
    Password: String
  },
  {
    collection: "adminsDatabase"
  }
);

export default mongoose.model("Admin", adminSchema);