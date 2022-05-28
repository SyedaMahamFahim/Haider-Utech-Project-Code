import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
const header = () => {
  return (
    <>
      <marquee className="alert alert-danger">
        If you have any problem email me - haiderweb2011@gmail.com&nbsp; &nbsp;
        <a target="__blank" href="mailto:haiderweb2011@gmail.com">
          Click Here
        </a>
        &nbsp; &nbsp;
      </marquee>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TechPlayerz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login-signup">
                  Registration/Login
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div class="d-flex cart">
            <Link to="/cart">
            <AiOutlineShoppingCart/>
            </Link>
           
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default header;
