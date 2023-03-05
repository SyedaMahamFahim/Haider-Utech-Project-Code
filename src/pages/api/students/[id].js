import { connectDatabase } from "../../../database/index";
import { Student } from "../../../model/student";

export default async function handler(req, res) {
  await connectDatabase();
  const method = req.method;
  const { id } = req.query;

  // id ---> 63fcad3d9f8cf6361dadab8a
  // console.log("id",63fcad3d9f8cf6361dadab8a)

  try {
    let student;
    student = await Student.findById(id);
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    } else {
      // if(method === "GET"){

      // }else if(method === "DELETE"){

      // }else if(method === "PUT"){

      // }
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


// next auth ---> authentication