const Student = require("../models/Student");

exports.getStudentsBySport = async(req, res)=>{
    try{
        const students = await Student.find({
            sport:req.params.sport
        });

        res.json(students);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.getAllStudents = async(req,res)=>{
    const students = await Student.find();
    res.json(students);
};

exports.addStudent = async(req,res)=>{
    const student = await Student.create(req.body);
    res.status(201).json(student);
};

exports.updateStudent = async(req,res)=>{
    const Student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.json(updatedStudent);
};

exports.deleteStudent = async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message:"Student Deleted"
    });
};