import React from "react";
import { Link } from "react-router-dom";
import Imgcard from "../images/omen.png";

const Courses = ({ course }) => {
  
  return (
    <>
      
        <div className="card-group">
          <div className="card">
            <img src={Imgcard} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">
                {course.description.substring(0, 100)}
              </p>
              
              
              <Link to={`${course._id}`}>
              
              <button type="button" className="btn btn-outline-success">
                Apply Course
              </button>
              </Link>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Courses;
