import React from 'react'
import { Link } from 'react-router-dom'
const MobileHeader = () => {
    return (
        <>
             <section className="mobile-header">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img className="mobile-logo" src="./assests/images/logo-paperhelpdesk.svg" alt="*" />
            </Link>
            <div className="d-flex">
              <Link to="/" className="mobile-bar" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i className="fas fa-bars" />
              </Link>
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <img className="img-fluid" src="./assests/images/logo-paperhelpdesk.svg" alt="*" width="250px" />
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <div>
                    <ul className="mobile-ul">
                      <li className="mobile-li">
                        <Link to="/eassy-editing">Essay Editing</Link>
                      </li>
                      <li className="mobile-li">
                        <Link to="/assignment-editing">Assignment Editing</Link>
                      </li>
                      <li className="mobile-li">
                        <Link to="/dissertation-editing">Dissertation Editing</Link>
                      </li>
                      <li className="mobile-li">
                        <Link to="/thesis-editing">Thesis Editing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
        </>
    )
}

export default MobileHeader
