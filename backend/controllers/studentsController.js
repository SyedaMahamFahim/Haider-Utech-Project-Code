const Student = require("../models/studentModel");
const catchAsyncError = require("../middleware/catchAsycnError");

exports.createStudent = catchAsyncError(async (req, res, next) => {
  const student = new Student(req.body);

  await student.save();
  res.status(201).json({
    success:true,
    message:"Student created successfully",
  });
});

exports.allStudents = catchAsyncError(async (req, res, next) => {
    const students = await Student.find();
    res.status(201).json({
      success:true,
      students
    });
  });
  