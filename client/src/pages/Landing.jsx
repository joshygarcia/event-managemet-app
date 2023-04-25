import { useState, useEffect } from "react"
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
    <div className="bg-gray-500 min-h-screen">
        <div className="">
            <button className=""
            onClick={handleLogin}
            >
              Login
            </button>
        </div>
        <div className="">
            {/* <img src="../../public/level-up-icon-white.png" alt="" /> */}
            <button className=""
            onClick={handleRegister}
            >
            Register
            </button>
        </div>
        <div className="">
          <h1 className="">

          </h1>
          <p className="">
            
          </p>
        </div>
    </div>
  )
}

export default Landing;