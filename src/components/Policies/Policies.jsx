import React from 'react'

const Policies = ({policyTitle}) => {
    return (
        <>
             {/* BreadCrumbs */}
      <div className="slider-wrapper">
        <section className="privacy-banner d-flex" style={{backgroundImage: 'url("./assests/images/page-title.jpg")', userSelect: 'auto'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="privacy-heading">
                  <h2>{policyTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
        </>
    )
}

export default Policies
