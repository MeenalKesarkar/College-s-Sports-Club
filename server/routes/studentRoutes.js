import express from "express";

import {
    getStudentsBySport,
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);

router.get("/:sport", getStudentsBySport);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;