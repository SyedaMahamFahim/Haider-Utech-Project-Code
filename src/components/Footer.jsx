import React from 'react'
import './Footer.css'
import FooterImg from'../images/diamond.png'

const footer = () => {
  return (
    <>
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span> <img src={FooterImg} alt="" width="50pxpx" height="50px" /></span><span><h1>TechPlayerz</h1></span>
            </div>
            <div className="col-md-4">
              <h1>OUR Courses</h1>
              <a href="/pages/courses.html">Valorant</a>
              <br />
              <a href="/pages/courses.html">Minecraft</a>
              <br />
              <a href="/pages/courses.html">CS:GO</a>
            </div>
            <div className="col-md-4">
              <h1>Other Links</h1>
              <a href="mailto:haiderweb2011@gmail.com">Email : haiderweb2011@gmail.com</a>
              <br />
              <a href="/pages/courses.html">Number : +92 0315 0002526</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer