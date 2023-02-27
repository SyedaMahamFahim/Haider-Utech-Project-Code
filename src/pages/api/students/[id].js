import { connectDatabase } from "../../../utils/index";
import { Student } from "../../../model/student";

export default async function handler(req, res) {
  await connectDatabase();
  const method = req.method;
  const { id } = req.query;

  try {
    let student;
    student = await Student.findById(id);
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    } else {
      switch (method) {
        case "GET":
          res.status(201).json({
            success: true,
            student,
          });
          break;

        case "DELETE":
          student = await Student.findByIdAndDelete(id);
          res.status(201).json({
            success: true,
            message: "Student Record Deleted Successfully",
            student,
          });
          break;

        case "PUT":
          student = await Student.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.status(201).json({
            success: true,
            message: "Student Record Updated Successfully",
            student,
          });
          break;

        default:
          res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// https://nextjs.org/docs/api-routes/dynamic-api-routes
