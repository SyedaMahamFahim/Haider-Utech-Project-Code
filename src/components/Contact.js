import React from 'react'
import ContactImg from '../images/diamond.png'

const contact = () => {
  return (
    <>
        <div className="contact-sec">
        <h1 className="text-center">Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={ContactImg} alt="" width="400em" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Comment</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact