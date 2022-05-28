import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { urlFor, client } from "../utils/client";
import "./coursedetail.css";
import { priceSign } from "../utils/priceSign";
const CourseDetail = () => {
  let { id } = useParams();
  const [courseDetail, setCourseDetail] = useState({
    course: null,
    loading: true,
    error: "",
  });

  const { course, loading, error } = courseDetail;

  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const course = await client.fetch(
          `
            *[_type == "courses" && _id == $id][0]`,
          { id }
        );
        setCourseDetail({ ...courseDetail, course, loading: false });
      } catch (err) {
        setCourseDetail({
          ...courseDetail,
          error: err.message,
          loading: false,
        });
      }
    };
    fetchData();
  }, [id,courseDetail]);
  console.log(courseDetail);

  return (
    <>
      {loading ? (
        "Loading"
      ) : error ? (
        `Error ${error}`
      ) : (
        <>
          <Header />
          <section className="py-5 text-center container-fluid course_detail">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-blod white-text">{course.name}</h1>
                <nav aria-label="breadcrumb"  >
                  <ol className="breadcrumb container justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/" className="white-text row align-items-center">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/courses" className="white-text">Courses</Link>
                    </li>
                    <li className="breadcrumb-item danger" aria-current="page"
                  style={{color:"crimson", fontSize:"bold"}}
                    >
                    {course.name}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>
          <br></br>

          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <img src={urlFor(course.image)} alt="" width={"100%"} height="auto"/>
                  </div>
                  <div className="col-6">
                      <p> {priceSign}{course.price} | Rating: {course.rating} /5 </p>
<h1>{course.name}</h1>
<h2>{course.category}</h2>
<p>{course.description}</p>
<Link to={"/"}>
<button type="button" className="btn btn-danger">Enroll Now</button>

</Link>

                  </div>

              </div>
          </div>
          <br></br>
          <Footer />
        </>
      )}
    </>
  );
};

export default CourseDetail;
