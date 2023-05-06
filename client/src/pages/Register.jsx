import { useState } from "react"
import { Card, Text, TextInput, Button, Flex } from "@tremor/react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// This component is a page for registering a new company user account on the site.

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Handle form submission logic
    //
  }

  return (
    <Flex className="min-h-screen" justifyContent="center" alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        className="min-h-screen flex-col"
      >
        <Text className="mb-6 text-center text-2xl text-black">Register</Text>
        <div decoration="bottom" decorationColor="blue" className="max-w-lg">
          <form
            className="flex flex-col justify-center align-middle"
            onSubmit={handleSubmit}
          >
            <TextInput
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="mb-4"
            />
            <TextInput
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="mb-4"
            />
            <TextInput
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mb-4"
              placeholder="Email"
            />
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextInput
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="mb-4"
            />
            <TextInput
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="mb-4"
            />
            <TextInput
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="mb-4"
            />
            <TextInput
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              placeholder="Zip"
              className="mb-4"
            />
            <Button type="submit" className="mt-4 w-32 self-center">
              Register
            </Button>
            <Text className="text-md mt-6 text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </Text>
          </form>
        </div>
      </Flex>
      <div
        className="flex h-screen w-full flex-col items-center justify-center bg-slate-900 text-center"
        id="register-link"
      >
        <a href="/" className="pointer cursor-auto">
          <img
            src="../public/level-up-icon-white.png"
            alt="Level Up Logo"
            className="h-32 w-32"
          />
        </a>
      </div>
    </Flex>
  )
}

export default Register
