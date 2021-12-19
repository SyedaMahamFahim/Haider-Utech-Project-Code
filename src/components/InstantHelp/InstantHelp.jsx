import React from 'react'
import { Link } from 'react-router-dom'

const InstantHelp = () => {
    return (
        <>
             <section className="main-qty-edi-sec" >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-8 col-md-8 col-sm-12" >
              <div className="qty-heading" >
                <h2 >Quality Editing &amp; Proofreading Services for your Essays. Get
                  Instant Help Now!</h2>
                <p >Secure discount offers by talking to our professionals. We assure
                  you quality editing &amp; proofreading services with professional support to have you as our
                  returning client!</p>
                <Link to="/" className="btn-theme-yellow" ><i className="fa fa-comments-o"  /> Chat
                  With Our Expert</Link>
                <Link to="/" className="btncontact btn-theme-blue gotocontact" ><i className="fa fa-tty"  /> Let's Get
                  Started</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" >
              <div className="agent-img" >
                <Link to="/" ><img src="./assests/images/agent.png" alt="Agent"  /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default InstantHelp
