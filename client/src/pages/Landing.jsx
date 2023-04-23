import { useState, useEffect } from "react"
import '../css/landing.css'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  let navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleRegister = () => {
    navigate("/register")
  }

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="landing-container">
        <div className="landing-login">
            <button className="landing-login-btn"
            onClick={handleLogin}
            >
              Login
            </button>
        </div>
        <div className="landing-main-content">
            {/* <img src="../../public/level-up-icon-white.png" alt="" /> */}
            <button className="landing-register"
            onClick={handleRegister}
            >
            Register
            </button>
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