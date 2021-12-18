import React from 'react'

const Footer = () => {
    return (
        <>
             {/* Footer */}
      <footer className="footer-main">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <a href="/" className="logo-main"> <img width={180} src="./images/logo-paperhelpdesk.svg" alt="logo" /></a>
                <p className="clum-one-para">PaperHelpDesk Services website with all its applications and systems is an online
                  service platform solely owned and operated by PaperHelpDesk Services. We provide editing services to
                  clients as required.</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="xsmtpx-30">Quick Contact Us</h3>
                <form>
                  <ul className="linkinglist">
                    <li><input type="text" name="Name" placeholder="Name" required /></li>
                    <li><input type="email" name="Email" placeholder="Email" required /></li>
                    <li><input type="tel" name="Phone" placeholder="Phone Number" required /></li>
                    <li><button type="submit">submit now</button></li>
                    <input type="hidden" id="flocation" name="locationURL" defaultValue="http://paperhelpdesk.co/" />
                    <input type="hidden" name="hiddencapcha" defaultValue />
                  </ul>
                </form>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="xshide">Site Polices</h3>
                <ul className="linkinglist">
                  <li><a href="/privacypolicy.html">Privacy Policy</a></li>
                  <li><a href="/revisionpolicy.html">Revision Policy</a></li>
                  <li><a href="/termsandconditions.html">Term And Condition</a></li>
                  <li><a href="/moneybackguarantee.html">Money Back Guarantee</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="xsmtpx-30">STAY CONNECTED</h3>
                <ul className="linkinglist">
                  <li>Call Us</li>
                  <li>+1-213-221-2855</li>
                  <li>+44-161-660-3238</li>
                  <li>Email</li>
                  <li>support@paperhelpdesk.co</li>
                  <li>Address</li>
                  <li>39899 Balentine Drive, Newark, New Jersey, 94560, USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright">Copyrights © PaperHelpDesk. All Rights Reserved. <span id="year">2021</span>. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer
