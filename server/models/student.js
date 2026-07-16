const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    class: String,
    gender: String,
    sport: String,
    image: String
});

module.exports = mongoose.model("Student", studentSchema);