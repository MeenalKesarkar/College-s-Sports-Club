const express = require("express");

const router = express.Router();

const {
    getStudentBySport,
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

router.get("/", getAllStudents);

router.get("/:sport", getStudentBySport);

router.get("/", addStudent);

router.get("/:id", updateStudent);

router.get("/:id", deleteStudent);

module.exports = router;

