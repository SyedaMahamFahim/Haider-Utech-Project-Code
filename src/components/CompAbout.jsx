import React from "react";
import Diamond from "../images/diamond.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-sec">
        <h1 className="text-center">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Diamond} alt="" />
            </div>
            <div className="col-md-6">
              <h1 className="about-h1">About TechPlayerz</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sint nam quo quia odio? Reprehenderit delectus
                tempora ipsam, corporis quasi architecto fugiat, dolores eveniet
                nesciunt necessitatibus vero iusto distinctio cum!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sint nam quo quia odio? Reprehenderit delectus
                tempora ipsam, corporis quasi architecto fugiat, dolores eveniet
                nesciunt necessitatibus vero iusto distinctio cum!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
