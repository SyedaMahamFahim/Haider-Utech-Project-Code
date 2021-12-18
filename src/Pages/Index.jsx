import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhatWeDoData from "./StaticPageData/WhatWeDoData";
import WhatIsIncluded from "./StaticPageData/WhatIsIncluded";
import ExpertEditing from "../components/ExpertEditing/ExpertEditing";
import Contact from "../components/Contact/Contact";
const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="slider-wrapper">
        <section className>
          <div className="item">
            <div
              className="home-banner d-flex"
              customStyle
              style={{ backgroundImage: "url(/assests/images/banner.jpg)" }}
            >
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="home-banner-content">
                      <h1>
                        WELCOME TO <strong>PAPER HELP DESK</strong>{" "}
                        <span>
                          QUALITY EDITING &amp; PROOFREADING SERVICE FOR YOUR
                          PAPERS!
                        </span>
                      </h1>
                      <a className="btn-theme-yellow">
                        <i className="fa fa-comments-o" /> Chat With Our Expert
                      </a>
                      <a className="btncontact btn-theme-blue gotocontact">
                        <i className="fa fa-tty" /> Let's Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-2 col-md-4 offset-md-2">
                    <div className="banner-form">
                      <div className="headerr">
                        <img src="/assests/images/50-off2.png" alt="" />
                      </div>
                      <h3>SIGN UP</h3>
                      <section className="banform">
                        <div className="container">
                          <div className="row">
                            <div className>
                              <div className="ban-form">
                                <form className="cmxform" id="bannerform">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="fldset">
                                        <input
                                          id="username"
                                          name="Name"
                                          minLength={2}
                                          type="text"
                                          placeholder="Enter your name"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="fldset">
                                        <input
                                          id="cemail"
                                          type="email"
                                          name="Email"
                                          placeholder="Enter email here"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="fldset">
                                        <input
                                          id="phone-coun"
                                          name="Number"
                                          type="number"
                                          placeholder="Phone Number"
                                          required
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="fldset">
                                      <input
                                        name="submit"
                                        type="submit"
                                        placeholder="Connect With Us"
                                        required
                                      />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Rating Section*/}
      <section className="bark-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="./assests/images/bark.svg" />
              <div className="bark-star">
                <p>Bark</p>
                <img className="stars" src="./assests/images/stars-45.png" />
              </div>
              <div className="numbers">
                <p>
                  4.7
                  <sup>/5</sup>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src="./assests/images/trustpilot.svg" />
              <div className="bark-star">
                <p>Trustpilot</p>
                <img className="stars" src="./assests/images/stars-45.png" />
              </div>
              <div className="numbers">
                <p>
                  8.9
                  <sup>/10</sup>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src="./assests/images/sitejabber.svg" />
              <div className="bark-star">
                <p>Sitejabber</p>
                <img className="stars" src="./assests/images/stars-45.png" />
              </div>
              <div className="numbers">
                <p>
                  4.4
                  <sup>/5</sup>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src="./assests/images/reviews-icon.png" />
              <div className="bark-star">
                <p>Reviews.io</p>
                <img className="stars" src="./assests/images/stars-45.png" />
              </div>
              <div className="numbers">
                <p>
                  4.7
                  <sup>/5</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What is included */}
      <section className="Whatinclude">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>What’s Included?</h2>
              <p>
                We guarantee that your custom editing will not only be delivered
                on time but
                <br />
                will also be of the highest quality.
              </p>
            </div>
          </div>
          <div className="row">
            {
              WhatIsIncluded.map((content,index)=>{
                return(
                  <>
                  <WhatIsIncludedContent content={content} key={index}/>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
      {/* What we Do */}
      <section className="what-we-do">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>What We Do</h2>
            </div>
          </div>
          <div className="row">
            {
              WhatWeDoData.map((content,index)=>{
                return(
                  <>
                  <WhatWeDoContent content={content} key={index}/>
                  </>
                )
              })
            }
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="butons">
                <a href className="gotocontact">
                  SIGN UP
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="chat">
                <a className="btn-theme-blue">
                  <i className="fa fa-comments-o" /> Chat With Our Expert
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="num">
                <a href>+44 1256 274369</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <CallToAction />
      {/* How Its Works */}
      <HowItWorks />
       {/* Editing And Proof */}
       <section className="editingproof">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6">
                <h2>Editing and Proofreading</h2>
                <p>When it comes to academic writing, stroking your ideas on paper is only the first step. You also need to
                  strike the correct tone, persuade your readers of your opinions, and follow the values and conventions of
                  your field.<br /><br />Fortunately, we are here to assist! Our team of academic editors can support you express
                  your concepts and respect the procedures of academic writing, so you can hand in your paper with
                  self-assurance. We can edit and proof read all your study-related documents, with 100% happiness assured.
                </p>
              </div>
              <div className="col-md-6">
                <div className="right-img">
                  <img src="./assests/images/books.png" width="300px" />
                </div>
              </div>
              <h3>Our Knowledge in proposing Paper Help through Skilful Editing &amp; Proofreading Services span across below
                listed areas;</h3>
            </div>
            <div className="service-slider">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" interval={3000}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row edt-prf-row">
                        <div className="col-6 edt-slider">
                          <div className="lis">
                            <div className="headerr">
                              <img src="./assests/images/dissertation.png" />
                              <h4>Dissertations</h4>
                            </div>
                            <div className="boddy">
                              <p>Our website Paper Help Desk is the best possible answer to meet the professional demands of
                                the dissertation. Our website will provide you the paper which will meet the standard
                                dissertation criteria, along with maintaining its uniqueness.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 edt-slider">
                          <div className="lis">
                            <div className="headerr">
                              <img src="./assests/images/capstone.png" />
                              <h4>Capstone</h4>
                            </div>
                            <div className="boddy">
                              <p>Our website Paper Help Desk is the best possible answer to meet the professional demands of
                                the dissertation. Our website will provide you the paper which will meet the standard
                                dissertation criteria, along with maintaining its uniqueness.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row edt-prf-row">
                        <div className="col-6 edt-slider">
                          <div className="lis">
                            <div className="headerr">
                              <img src="./assests/images/theses.png" />
                              <h4>Theses</h4>
                            </div>
                            <div className="boddy">
                              <p>Our website Paper Help Desk is the best possible answer to meet the professional demands of
                                the dissertation. Our website will provide you the paper which will meet the standard
                                dissertation criteria, along with maintaining its uniqueness.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 edt-slider">
                          <div className="lis">
                            <div className="headerr">
                              <img src="./assests/images/assignments.png" />
                              <h4>Assignments</h4>
                            </div>
                            <div className="boddy">
                              <p>Our website Paper Help Desk is the best possible answer to meet the professional demands of
                                the dissertation. Our website will provide you the paper which will meet the standard
                                dissertation criteria, along with maintaining its uniqueness.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
              </div>
            </div>
            <div className="text-center">
              <a className="btn-theme-yellow"><i className="fa fa-comments-o" /> Chat With Our Expert</a>
              <a className="btncontact btn-theme-blue gotocontact"><i className="fa fa-tty" /> Let's Get Started</a>
            </div>
          </div>
        </section>
        {/* Reviews Section */}
        <section className="bark-sec-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="hding">
                  <h3>Reviews, Comments and Love From
                    <br />
                    Paper Help Desk Customers and Community
                  </h3>
                </div>
              </div>
              <div className="col-md-3 ">
                <img src="./assests/images/bark.svg" />
                <div className="bark-star-1">
                  <p>Bark</p>
                  <img className="stars-1" src="./assests/images/stars-45.png" />
                </div>
                <div className="numbers-1">
                  <p>4.7
                    <sup>/5</sup>
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <img src="./assests/images/trustpilot.svg" />
                <div className="bark-star-1">
                  <p>Trustpilot</p>
                  <img className="stars-1" src="./assests/images/stars-45.png" />
                </div>
                <div className="numbers-1">
                  <p>8.9
                    <sup>/10</sup>
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <img src="./assests/images/sitejabber.svg" />
                <div className="bark-star-1">
                  <p>Sitejabber</p>
                  <img className="stars-1" src="./assests/images/stars-45.png" />
                </div>
                <div className="numbers-1">
                  <p>4.4
                    <sup>/5</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Slider */}
        <section className="bark-slider">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container testi-cont">
                  <div className="row main-sq" style={{width: '80%', margin: 'auto'}}>
                    <div className="col-lg-12 ">
                      <div className="row ">
                        <div className="col-3 my-auto text-center pt-5">
                          <div className="inner-testimonial">
                            <img src="./assests/images/eb-4.svg" />
                          </div>
                          <div className="clearfix">
                          </div>
                          <p className="name-anna">customer<br />1942728</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row Verified-people">
                            <div className="col-md-9 text-center">
                              <p>Verified order</p>
                            </div>
                            <div className="col-md-3">
                              <p className="date">Aug 10, 2019</p>
                            </div>
                            <div className="col-md-12">
                              <h3>Paper was written in a timely matter, before the deadline.</h3>
                              <h6>Edits were made very quickly. I am satisfied with her work and would recommend her services.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container testi-cont">
                  <div className="row main-sq" style={{width: '80%', margin: 'auto'}}>
                    <div className="col-lg-12 ">
                      <div className="row ">
                        <div className="col-3 my-auto text-center pt-5">
                          <div className="inner-testimonial">
                            <img src="./assests/images/eb-4.svg" />
                          </div>
                          <div className="clearfix">
                          </div>
                          <p className="name-anna">customer<br />1942728</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row Verified-people">
                            <div className="col-md-9 text-center">
                              <p>Verified order</p>
                            </div>
                            <div className="col-md-3">
                              <p className="date">Aug 10, 2019</p>
                            </div>
                            <div className="col-md-12">
                              <h3>Paper was written in a timely matter, before the deadline.</h3>
                              <h6>Edits were made very quickly. I am satisfied with her work and would recommend her services.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container testi-cont">
                  <div className="row main-sq" style={{width: '80%', margin: 'auto'}}>
                    <div className="col-lg-12 ">
                      <div className="row ">
                        <div className="col-3 my-auto text-center pt-5">
                          <div className="inner-testimonial">
                            <img src="./assests/images/eb-4.svg" />
                          </div>
                          <div className="clearfix">
                          </div>
                          <p className="name-anna">customer<br />1942728</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row Verified-people">
                            <div className="col-md-9 text-center">
                              <p>Verified order</p>
                            </div>
                            <div className="col-md-3">
                              <p className="date">Aug 10, 2019</p>
                            </div>
                            <div className="col-md-12">
                              <h3>Paper was written in a timely matter, before the deadline.</h3>
                              <h6>Edits were made very quickly. I am satisfied with her work and would recommend her services.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <ExpertEditing/>
        <Contact />
      
    </>
  );
};

const WhatWeDoContent = ({content}) => {
  return (
    <>
     <div className="col-md-4">
              <div className="row">
                <div className="col-md-2">
                  <img src={content.img} />
                </div>
                <div className="col-md-10">
                  <h3> {content.title}</h3>
                  <p>
                  {content.desc}

                  </p>
                </div>
              </div>
            </div>
    </>
  );
};

const WhatIsIncludedContent=({content})=>{
  return(
    <>
    <div className="col-lg-3">
              <div className="faculty">
                <img src={content.img}/>
                <h3>{content.title}</h3>
                <p>
                {content.desc}
                </p>
              </div>
            </div>
    </>
  )
}
export default Index;
