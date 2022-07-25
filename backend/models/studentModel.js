const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Parent Phone Number is required"],
  },
  level: {
    type: String,
    required: [true, "Level is required"],
  },
  percentage: {
    type: String,
    required: [true, "Percentage is required"],
  },
  section: {
    type: String,
    required: [true, "Section is required"],
  },
  courses: [
    {
      type: String,
      required: [true, "Courses is required"],
    },
  ],
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  user:{
    type:String,
    required: [true, "User is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});





module.exports=mongoose.model("Student",studentModel);
