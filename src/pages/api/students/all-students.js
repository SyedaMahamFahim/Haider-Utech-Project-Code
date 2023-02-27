// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDatabase from "../../../utils/connectDatabase";
import {Student} from "../../../model/Student";

export default async function handler(req, res) {
  await connectDatabase();
  // get the list of students from the database
  try {
    if (req.method === "GET") {
      const students = await Student.find();
      res.status(200).json({ success: true, students });
    } else {
      res.status(405).json({ success: false, message: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
