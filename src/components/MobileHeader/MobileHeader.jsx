import React from 'react'
import LOGO from '../../images/logo-paperhelpdesk.svg'

const MobileHeader = () => {
    return (
        <>
             <section className="mobile-header">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img className="mobile-logo" src={LOGO} alt="*" />
            </a>
            <div className="d-flex">
              <a className="mobile-bar" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i className="fas fa-bars" />
              </a>
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <img className="img-fluid" src={LOGO} alt="*" width="250px" />
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <div>
                    <ul className="mobile-ul">
                      <li className="mobile-li">
                        <a href="/essayediting.html">Essay Editing</a>
                      </li>
                      <li className="mobile-li">
                        <a href="/assignmentediting.html">Assignment Editing</a>
                      </li>
                      <li className="mobile-li">
                        <a href="/dissertationediting.html">Dissertation Editing</a>
                      </li>
                      <li className="mobile-li">
                        <a href="/thesisediting.html">Thesis Editing</a>
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
