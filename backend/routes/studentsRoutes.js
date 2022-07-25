const express = require("express");
const router = express.Router();
const { createStudent,allStudents } = require("../controllers/studentsController");


router.post("/add-student", createStudent);

router.get("/all-students", allStudents);


module.exports=router