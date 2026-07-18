import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
{
    id: Number,
    name: String,
    gender: String,
    sportHead: String,
    age: Number,
    Password: String
},
{
    collection: "adminsDatabase"
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;