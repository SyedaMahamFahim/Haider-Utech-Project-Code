import React from 'react'

const ServiceHeroSection = ({ title, imgUrl }) => {
  return (
    <>
      <div className="slider-wrapper">
        <section className>
          <div className="item">
            <div className="home-banner d-flex" style={{ backgroundImage: `url(${imgUrl})` }}>
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="home-banner-content">
                      <h1>{title}</h1>
                      <a className="btn-theme-yellow"><i className="fa fa-comments-o" /> Chat With Our
                        Expert</a>
                      <a className="btncontact btn-theme-blue gotocontact"><i className="fa fa-tty" /> Let's Get
                        Started</a>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-2 col-md-4 offset-md-2">
                    <div className="banner-form">
                      <div className="headerr">
                        <img src="./assests/images/50-off2.png" alt="" />
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
                                        <input id="username" name="Name" minLength={2} type="text" placeholder="Enter your name" required />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="fldset">
                                        <input id="cemail" type="email" name="Email" placeholder="Enter email here" required />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="fldset">
                                        <input id="phone-coun" name="Number" type="number" placeholder="Phone Number" required autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="fldset">
                                      <input name="submit" type="submit" placeholder="Connect With Us" required />
                                    </div>
                                  </div>
                                </form></div>
                            </div>
                          </div>
                        </div>
                      </section></div>
                  </div></div></div></div></div></section>
      </div>
    </>
  )
}

export default ServiceHeroSection
