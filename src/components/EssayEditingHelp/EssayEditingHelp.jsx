import React from 'react'

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
              <a className="btncontact btn-theme-light-blue" ><i className="fa fa-user-o"  /> Sign Up</a>
              <a target="_self" className="btn-theme-yellow" ><i className="fa fa-comments-o"  /> Chat With Our Expert</a>
              <a className="btncontact btn-theme-light-blue gotocontact" ><i className="fa fa-tty"  /> Let's Get Started</a>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default EssayEditingHelp
