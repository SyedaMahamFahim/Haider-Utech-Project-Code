import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact/Contact'
import PlagiarismCheckerProfessional from './StaticPageData/PlagiarismCheckerProfessional'
const PlagiarismChecker = () => {
    return (
        <>
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
                      <Link to="/" className="btn-theme-yellow">
                        <i className="fa fa-comments-o" /> Chat With Our Expert
                      </Link >
                      <Link to="/" className="btncontact btn-theme-blue gotocontact">
                        <i className="fa fa-tty" /> Let's Get Started
                      </Link>
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

      <section className="professional-sec">
        <div className="container">
          <div className="main-box">
            <div className="row">

            {
              PlagiarismCheckerProfessional.map((content,index)=>{
                return(
                  <>
                  <PlagiarismCheckerProfessionalContent content={content} key={index}/>
                  </>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
      <Contact/>

       {/* Editing h1 Section  */}
       <section className="main-paper-hlp-dsk-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Free Assignment Checker: Keep Plagiarism At Arm’s Length</h2>
                <h6>The Most Reliable Help for Your Essays!</h6>
                <p>If you are not confident doing your essay and keep having second
                  thoughts on writing quality essay drafts. If you keep worrying over syntax, grammar, language,
                  structure and referencing of your essay papers.</p>
                <p>You definitely need a professional essay service to help edit your
                  essays. Paper Help Desk shines in times of your need to offer top notch essay help, editing and
                  proofreading services to secure you best grades throughout your courses and modules.</p>
                <Link to="/" className="btncontact btn-theme-blue"><i className="fa fa-user-o" /> Sign Up</Link>
                <Link to="/"  className="btn-theme-yellow"><i className="fa fa-comments-o" /> Chat With
                  Our Expert</Link>
                <Link  to="/"className="btncontact btn-theme-blue gotocontact"><i className="fa fa-tty" /> Let's Get Started</Link>
              </div>
              <br />
              <div className="checking">
                <h4>AVOIDING PLAGIARISM – THE ULTIMATE NECESSITY FOR YOUR ASSIGNMENT PAPERS</h4>
                <p>We all understand that most assignments require some sort of secondary information and this factor can cause concerns related to plagiarism. But there are several methods you can use to avoid plagiarism altogether.</p>
                <h4>PARAPHRASING – PUT THE INFORMATION INTO YOUR OWN WORDS</h4>
                <p>It is not difficult for you to find the relevant information on the internet. Some might even say that this is the easiest part of the assignment. The trick, however, is to understand all the information and rephrase it into your words. Always remember; copy pasting data without properly quoting the author is a big no if you wish to avoid the charges of plagiarism.</p>
                <h4>QUOTING – USE IT WISELY</h4>
                <p>As a student, you probably love nothing more than quoting other authors and who could blame you for this? It is perhaps the most convenient way of filling up your paper and getting it over and done with. But as always, there is a catch. The excessive use of quotations can have detrimental impact on the efficacy for your paper and hence, you should only use quotes when there is no room for paraphrasing.</p>
                <h4>CITATIONS: FOLLOW YOUR INSTITUTION’S GUIDELINES</h4>
                <p>A surefire way to evade plagiarism is through proper citations. Institutions provides you formatting guidelines that specifies how you should cite the research of other authors. In most cases, you are required to mention the name of authors and date on which there research was published.</p>
                <h4>THE UTILITY OF AN EFFECTIVE ASSIGNMENT PLAGIARISM CHECKER</h4>
                <p>When it comes checking your final assignment for plagiarism, you can never be too careful. Students often follow every rule in the book to escape plagiarism but sometimes even that is not enough. At the end of the day, the onus is on you to make sure that your assignment is plagiarism free and the best way of doing that is through a potent assignment checker.</p>
                <h4>HOW AN ASSIGNMENT CHECKER FUNCTIONS</h4>
                <p>You may have heard of turnitin assignment checker as it one of the most popular tools used by students to examine plagiarism in their assignment. Turntin, along with other assignment checking software operates in an extremely simple manner. Initially, you are required to attach your assignment or paste its text into the program. From there, you submit a request for the program to analyze your assignment and finally, you are provided a detailed report which highlights the copied content and its sources. You are also told what percentage of the document is original.</p>
                <h4>WITH OUR ASSISTANCE, PLAGIARISM IS AVOIDABLE</h4>
                <p>By utilizing the best assignment similarity checkers available on the market and also some customized tools of our own, we ensure that plagiarism remains a nonissue for the students who acquire our services. With us, you can get an extensive assignment in the shortest periods of time without ever worrying about the possibility of any plagiarism. And this is not it. We will check your assignment for plagiarism for free. WOWriters guarantees you high quality, originality and on-time delivery. </p>
              </div>
            </div>
          </div>
        </section>
        {/* Quality Editing Instant Help Or CTA*/}
        <section className="quality-editing" >
          <div className="container" >
            <div className="row" >
              <div className="col-md-8" >
                <div className="helpnow" >
                  <h3 >Quality Editing &amp; Proofreading Services for your Dissertations. Get Instant Help Now!</h3>
                  <p >Secure discount offers by talking to our professionals. We assure you<br  /> quality editing &amp; proofreading services with professional support to have you as our returning client! </p>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="agent-pic" >
                  <img src="./assests/images/agent.png" alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}


const PlagiarismCheckerProfessionalContent=({content})=>{
  return(
    <>
   

            <div className="col-md-3">
                <div className="Faculty">
                  <img src={content.img} alt={content.title} />
                </div>
                <div className="Faculty-content">
                <h3>{content.title}</h3>
                <p>
                {content.desc}
                </p>
                </div>
              </div>
    </>
  )
}
export default PlagiarismChecker
