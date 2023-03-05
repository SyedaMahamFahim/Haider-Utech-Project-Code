import connectDatabase from "../../../database/connectDatabase";
import { Student } from "../../../model/Student";

export default async function handler(req, res) {
  await connectDatabase();
  // console.log(req.method);
  if (req.method === "POST") {
    const { name, email, phone, address, description } = req.body;
    const student = await Student.create(
      {
        name,
        email,
        phone,
        address,
        description,
      }
    );
    res.status(201).json({ success: true, student });
  } else {
    // put, delete, get
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
  
}

// get  --> read
// post --> create
// put --> update
// delete --> delete

