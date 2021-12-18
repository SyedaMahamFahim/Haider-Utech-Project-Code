import React from "react";
import HowItWorkData from "./HowItWorkData";
const HowItWorks = () => {
  return (
    <>
      <section className="howitworks">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <h2>How it Works</h2>
              <p>We have a simple 4 step ordering and delivering process!</p>
            </div>
          </div>
          <div className="row">
            {
              HowItWorkData.map((content,index)=>{
                return(
                  <>
                  <HowItWorkContent content={content} key={index}/>
                  </>
                )
              })
            }
            
          </div>
        </div>
      </section>
    </>
  );
};

const HowItWorkContent=({content})=>{
  return(
    <>
    <div className="col-md-3">
              <div className="circle">
                <img src={content.img}/>
              </div>
              <div className="circle-line">
                <h3>{content.title}</h3>
                <p>
                 {content.desc}
                </p>
              </div>
            </div>
    </>
  )
}
export default HowItWorks;
