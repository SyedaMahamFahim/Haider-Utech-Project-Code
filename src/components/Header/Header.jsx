import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className="header-main">
        <div className="top-bar d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="emailsec">
                  <Link to="/"><i className="fas fa-envelope" /> support@paperhelpdesk.co</Link>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="top-info-list">
                  <li><Link to="/"><span><img className="flag" src='./assests/images/uk-flag.png' alt=''/></span>
                      +44-161-660-3238 </Link></li>
                  <li><Link to="/" ><span><img className="flag" src='./assests/images/usa-flag.png' alt=''/></span> +1-213-221-2855
                    </Link></li>
                  <li><i className="fas fa-comments" /> Live Chat </li>
                  <li><Link to="/" className="btncontact btn-main gotocontact">Let's Get Started</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-area-full">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 logo-area">
                <div className="logo">
                  <Link to="/PaperHelpDesk">
                    <img className="img-fluid" src='./assests/images/logo-paperhelpdesk.svg' alt="*" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 d-flex ">
                <div className="main-menu align-self-center d-none d-lg-block">
                  <ul className="forpgactive">
                    <li className>
                    <Link to="/eassy-editing">Essay Editing</Link>
                    </li>
                    <li className><Link to="/assignment-editing">Assignment Editing</Link>
                    </li>
                    <li className>
                    <Link to="/dissertation-editing">Dissertation Editing</Link>
                    </li>
                    <li className>
                    <Link to="/thesis-editing">Thesis Editing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}

export default Header
