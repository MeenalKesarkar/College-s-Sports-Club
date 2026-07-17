import Student from "../models/Student.js";

export const getStudentsBySport = async (req, res) => {
    try {
        const students = await Student.find({
            sport: req.params.sport
        });

        res.json(students);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

export const getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
};

export const addStudent = async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
};

export const updateStudent = async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedStudent);
};

export const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student Deleted"
    });
};