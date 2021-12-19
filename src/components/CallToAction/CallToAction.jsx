import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <>
             <section className="ctablack">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Awaiting You for Our Special Membership Offer!</h2>
              <p>Save up to 50% off on all future orders by becoming our member today!</p>
              <Link to="/" className="btn-theme-yellow"><i className="fa fa-comments-o" /> Chat With Our Expert</Link>
              <Link to="/" className="new-cta"><i className="fa fa-tty" /> Let's Get Started</Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default CallToAction
