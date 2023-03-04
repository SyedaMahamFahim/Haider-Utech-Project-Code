"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactInfo = () => {
  const [userName, setUserName] = useState("");

  //   Post data to the server
  const handleSubmit = async () => {
    // post request using axios with error handling
    try {
      const response = await axios.post(
        "http://localhost:3000/api/students/add-student",
        {
          name: "maham2",
          email: "maham@gmail.com",
          phone: 35464345756,
          address: "jfdsjkkjf",
          description: "fdghgfdf",
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ContactInfo;
