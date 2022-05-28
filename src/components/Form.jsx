import React, { useEffect, useState } from "react";
import "./form.css";
const Form = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="registration-btn">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setToggle(false)}
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => setToggle(true)}
            >
              Signup
            </button>
          </div>
          <div className="col-2"></div>
          <div className="col-8">
            {toggle && (
              <>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Full name"
                  />
                </div>
              </>
            ) }
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword" placeholder="password"/>
            </div>
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Form;
