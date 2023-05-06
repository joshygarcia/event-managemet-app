import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@tremor/react"
import image1 from "/event-1.png"
import image2 from "/event-2.png"
import image3 from "/event-3.png"
import image4 from "/event-4.png"

const Landing = () => {
  let navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleRegister = () => {
    navigate("/register")
  }

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <div className="xs:text-center flex min-h-screen flex-col bg-gray-900 text-white md:text-left">
      <header className="flex items-center justify-between bg-gray-800 p-4 shadow-md">
        <div className="flex items-center">
          <img
            src={"/level-up-icon-white.png"}
            alt="LevelUp Company Logo"
            className="ml-4 h-20"
          />
        </div>
        <div className="flex space-x-4">
          <Button
            className="hover:bg-blue-500 hover:text-white"
            variant="secondary"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            className="border-none bg-purple-500 hover:bg-purple-700"
            onClick={handleRegister}
          >
            Register
          </Button>
        </div>
      </header>
      <main className="mt-12 flex flex-grow flex-col items-center justify-center space-y-16 bg-gray-900">
        <section className="flex w-11/12 flex-col items-center space-y-4 p-8 md:w-3/4 md:flex-row md:space-y-0 lg:w-1/2 xl:w-7/12 2xl:w-7/12 ">
          <div className="flex flex-col md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold">
              Plan and Execute Unforgettable Events
            </h2>
            <p className="mb-4 text-gray-300">
              Want to plan and execute a memorable event without the stress?
              Look no further than{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>. Our
              event management software and expert managers make it easy to
              plan, organize, and execute any event. Start planning your dream
              event today with{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>.
            </p>
            <Button
              className="self-center border-none bg-purple-500 hover:bg-purple-700"
              onClick={handleRegister}
            >
              Register
            </Button>
          </div>
          <div className="justify-end md:flex md:w-1/2">
            <img
              src={image1}
              alt="Services"
              className="w-full rounded-md md:w-3/4"
            />
          </div>
        </section>
        <section className="flex w-11/12 flex-col items-center space-y-4 p-8 md:w-3/4 md:flex-row-reverse md:space-y-0 lg:w-1/2 xl:w-7/12 2xl:w-7/12 ">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold">
              Effortlessly Plan Your Next Event
            </h2>
            <p className="mb-4 text-gray-300">
              Planning an event can be overwhelming, but with{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>, it
              doesn't have to be. Our event management software simplifies every
              aspect of event planning, from venue selection to logistics
              coordination. Sign up today to experience hassle-free event
              planning with{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>.
            </p>
          </div>
          <div className="md:flex md:w-1/2 md:justify-start">
            <img
              src={image2}
              alt="Innovative Solutions"
              className="w-full rounded-md md:w-3/4"
            />
          </div>
        </section>
        <section className="flex w-11/12 flex-col items-center space-y-4 p-8 md:w-3/4 md:flex-row md:space-y-0 lg:w-1/2 xl:w-7/12 2xl:w-7/12 ">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold">
              Make Your Event Stand Out
            </h2>
            <p className="mb-4 text-gray-300">
              Want to host an event that truly stands out?{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span> can
              help. Our event management software and expert team give you
              access to the best venues, catering, and production services, so
              you can create a unique and memorable event. Get started today and
              make your event dreams a reality with{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>.
            </p>
          </div>
          <div className="justify-end md:flex md:w-1/2">
            <img
              src={image4}
              alt="Customer Support"
              className="w-full rounded-md md:w-3/4 2xl:m-0"
            />
          </div>
        </section>
        <section
          id="register"
          className="flex w-11/12 flex-col items-center space-y-4 p-8 md:w-3/4 md:flex-col md:space-y-0 lg:w-1/2 xl:w-7/12 2xl:w-7/12"
        >
          <div className="text-center md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold">Get Started Today</h2>
            <p className="mb-4 text-gray-300">
              Ready to take your event planning to the next level? Sign up now
              and start experiencing the benefits of{" "}
              <span className="capitalize text-purple-500 ">LevelUP</span>.
            </p>
          </div>
          <div className="md:flex md:w-1/2 md:flex-col md:justify-start">
            <Button
              className="self-center border-none bg-purple-500 hover:bg-purple-700"
              onClick={handleRegister}
            >
              Register
            </Button>
          </div>
        </section>
      </main>
      <footer className="mt-8 bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
