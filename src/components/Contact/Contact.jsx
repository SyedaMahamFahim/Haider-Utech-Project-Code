import React from 'react'

const Contact = () => {
    return (
        <>
             {/* Contact Us */}
      <section className="contactus">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>CONTACT US</h2>
            </div>
          </div>
          <form method="POST"  encType="multipart/form-data">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="app-input-group">
                      <span className><input type="text" placeholder="Name" name="Name" defaultValue size={40} className="input" required /></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="app-input-group">
                      <span><input type="text" placeholder="Email" name="Email" defaultValue size={40} className="input" required /></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="app-input-group">
                      <input type="text" placeholder="Phone Number" name="Number" required autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="app-input-group selectCust">
                      <select required name="Services">
                        <option value>Select Service</option>
                        <option value="Essay Editing">Essay Editing</option>
                        <option value="Assignment Editing">Assignment Editing</option>
                        <option value="Dissertation Editing">Dissertation Editing</option>
                        <option value="Thesis Editing">Thesis Editing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="app-input-group full projct">
                      <textarea name="Message" placeholder="Project details" cols={40} rows={1} className="textarea" required defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-right">
                  <div className="attach">
                    <input type="submit" defaultValue="Send" className="wpcf7-form-control wpcf7-submit submit" />
                    <input type="hidden" name="ctry" defaultValue="Pakistan Pakistan Pakistan Pakistan " />
                    <input type="hidden" name="pc" defaultValue="+92+92+92+92" />
                    <input type="hidden" name="hiddencapcha" defaultValue />
                    <input type="hidden" id="location" name="locationURL" defaultValue="http://paperhelpdesk.co/" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
        </>
    )
}

export default Contact
