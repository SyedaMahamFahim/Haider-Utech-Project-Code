import React from 'react'
import './hero_sec.css'

const HeroSection = () => {
  return (
    <>      
        <div className="cc">
        <div className="container">
          <br />
          <h1>Rank</h1>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <br />
          <h1>Headshot Percentage</h1>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <br />
          <h1>Winrate</h1>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '99%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <br />
          <h1>Courses Delivered</h1>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <br />
        </div>
        </div>
    </>
  )
}

export default HeroSection