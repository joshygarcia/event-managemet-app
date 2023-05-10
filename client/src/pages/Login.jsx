import { useState } from "react"
import { Text, TextInput, Button, Flex } from "@tremor/react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useUser } from "../components/UserContext"

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState({ user: false, password: false })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useUser()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await loginUser(formData.username, formData.password)

      if (response.ok) {
        const { token, user } = await response.json()
        setUser(user)
        localStorage.setItem("accessToken", token)
        // TODO: Redirect to the protected page
        navigate("/dashboard")
      } else {
        const { errors } = await response.json()
        setError(errors)
        throw new Error(errors)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex className="min-h-screen" justifyContent="center" alignItems="center">
      <div className="flex w-full flex-col " id="login-form">
        <Text className="mb-10 text-center text-2xl text-black">Login</Text>
        <form
          className="flex w-1/2 flex-col justify-center self-center align-middle"
          onSubmit={handleSubmit}
        >
          <TextInput
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={error.user}
            errorMessage={error.user}
            placeholder="Email or Username"
          />
          <TextInput
            className="mt-6"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            error={error.password}
          />
          <Button
            type="submit"
            className="mt-8 w-32 self-center"
            disabled={loading}
            loading={loading}
          >
            Login
          </Button>
          <Text className="text-md mb-10 mt-10 text-center text-gray-400">
            Dont have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </Text>
        </form>
      </div>
      <div
        className="flex h-screen w-full flex-col items-center justify-center bg-slate-900 text-center"
        id="register-link"
      >
        <img
          src="/level-up-icon-white.png"
          alt="Level Up Logo"
          className="h-32 w-32"
        />
      </div>
    </Flex>
  )
}

// Function to handle login API call
async function loginUser(username, password) {
  return await fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
}

export default Login
