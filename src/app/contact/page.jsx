import Link from "next/link";
import { Suspense } from "react";
import ContactInfo from "./components/ContactInfo";
async function getData() {
  const res = await fetch("http://localhost:3000/api/students/all-students");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Contact() {
  const data = await getData();

  console.log(data.students);

  return (
    <main>
      <h1>Contact Page</h1>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        {data?.students?.map((student) => {
          return (
            <div key={student.id}>
              <h1>{student.name}</h1>
              <p>{student.email}</p>
            </div>
          );
        })}
      </Suspense>
      <ContactInfo />
    </main>
  );
}
