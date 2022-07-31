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

// Get All Students
exports.allStudents = catchAsyncError(async (req, res, next) => {
    const students = await Student.find();
    res.status(201).json({
      success:true,
      students
    });
  });
  
// Get Single Student
exports.singleStudent= catchAsyncError(async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  res.status(201).json({
    success:true,
    student
  });
});

// Get Single Student
exports.removeSingleStudent= catchAsyncError(async (req, res, next) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(201).json({
    success:true,
    message:"Student Removed Successfully"
  });
});

// Get Single Student
exports.updateSingleStudent= catchAsyncError(async (req, res, next) => {
 const student= await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.status(201).json({
    success:true,
    message:"Student Record Updated Successfully",
    student
  });
});