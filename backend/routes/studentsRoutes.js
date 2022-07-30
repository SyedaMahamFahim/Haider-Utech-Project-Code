const express = require("express");
const router = express.Router();
const { createStudent,allStudents,singleStudent,removeSingleStudent } = require("../controllers/studentsController");

// http://localhost:8000/api/v1/students/add-student

// POST  --- Create a new student
// DELETE  --- Delete a student
// GET --- Get all students
// PUT --- Update a student

// Create Student
router.post("/add-student", createStudent);
// All students 
router.get("/all-students", allStudents);
// Single Student
router.get("/single-student/:id", singleStudent);
// Delete Student
router.delete("/remove-single-student/:id", removeSingleStudent);

module.exports=router