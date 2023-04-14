import { useState} from "react"
import '../css/landing.css'

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="landing-login">
            <button className="landing-login-btn">Login</button>
        </div>
        <div className="landing-main-content">
            <img src="../../public/level-up-icon-white.png" alt="" />
            <button className="landing-register">Register</button>
        </div>
        <div className="landing-text">
          <h1 className="landing-title">

          </h1>
          <p className="landing-paragraph">
            
          </p>
        </div>
    </div>
  )
}

export default Landing;