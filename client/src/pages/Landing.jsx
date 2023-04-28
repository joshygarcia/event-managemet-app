import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { Card, TextInput, Button, Flex } from "@tremor/react";

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
    <Flex 
      className="min-h-screen"
      justifyContent="center"
      alignItems="center"
    >
        <div className="w-32 flex flex-col">
            <Button className="mb-5"
              onClick={handleLogin}
              size="xl"
              variant="secondary"
            >
              Login
            </Button>
            {/* <img src="../../public/level-up-icon-white.png" alt="" /> */}
            <Button className=""
            onClick={handleRegister}
            size="xl"
            >
            Register
            </Button>
        </div>
        <div className="">
          <h1 className="">

          </h1>
          <p className="">
            
          </p>
        </div>
    </Flex>
  )
}

export default Landing;