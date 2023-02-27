import connectDatabase from "../../../utils/connectDatabase";
import {Student} from "../../../model/Student";

export default async function handler(req, res) {
  await connectDatabase();
  if (req.method === "POST") {
    const { name, email, phone, address, description } = req.body;
    const student = await Student.create({
      name,
      email,
      phone,
      address,
      description,
    });
    res.status(201).json({ success: true, student });
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
