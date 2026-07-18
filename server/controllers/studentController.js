import Student from "../models/Student.js";

export const getAllStudents = async (req, res) => {

    try {

        const students = await Student.find().sort({ id: 1 });

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const getStudentsBySport = async (req, res) => {

    try {

        const sport = req.params.sport;

        const students = await Student.find({
            sport: {
                $regex: new RegExp(`^${sport}$`, "i")
            }
        });

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const addStudent = async (req, res) => {

    try {

        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.status(200).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const deleteStudent = async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Student Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};