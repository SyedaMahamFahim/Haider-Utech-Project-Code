import React from 'react'
import { Link } from 'react-router-dom'

const EssayEditingHelp = ({title,paraOne,paraTwo}) => {
    return (
        <>
             <section className="main-paper-hlp-dsk-sec trms-sec" >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-12" >
              <h2 >{title}
              </h2>
              <p >{paraOne}</p>
              <p >{paraTwo}</p>
              <br /><br />
              <Link to="/" className="btncontact btn-theme-light-blue" ><i className="fa fa-user-o"  /> Sign Up</Link>
              <Link to="/"  className="btn-theme-yellow" ><i className="fa fa-comments-o"  /> Chat With Our Expert</Link>
              <Link to="/" className="btncontact btn-theme-light-blue gotocontact" ><i className="fa fa-tty"  /> Let's Get Started</Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default EssayEditingHelp
