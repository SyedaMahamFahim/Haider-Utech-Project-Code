import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

import {  client } from "../utils/client";

const Courses = () => {
  const [allCourses, setAllCourses] = useState({
    courses: [],
    error: "",
    loading: true,
  });
  const { loading, error } = allCourses;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courses = await client.fetch(`*[_type == "courses"]`);
        setAllCourses({ courses, loading: false });
      } catch (err) {
        setAllCourses({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

  console.log(allCourses.courses);
  return (
    <>
      {loading ? (
        "Loading"
      ) : error ? (
        `Errror ${error}`
      ) : (
        <>
          <Header />

          <div className="container mt-5">
            <div className="row align-items-center">
            {
            allCourses.courses.map((course,index)=> <div className="col-4" key={index}><Card course={course}/></div>)
          }
            </div>
          </div>
         
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Footer />
        </>
      )}
    </>
  );
};

export default Courses;
