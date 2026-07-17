import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    class: String,
    gender: String,
    sport: String,
    image: String
},
{
    collection: "StudentsData"
});
const Student = mongoose.model("Student", studentSchema);

export default Student;