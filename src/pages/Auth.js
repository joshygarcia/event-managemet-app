import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Auth() {
  return (
    <div className="w-full relative">
      <div className=" flex">
        <div className="w-1/2 bg-green-400 ">
          <img src="images/logo.png" className="" alt="logo" />
        </div>
        <div className="bg-white text-center pl-36 w-1/2 ">
          <div className="border-2 items-center w-2/5">
            <p className="text-2xl font-semibold">Sign In</p>
            <p>
              Not registered yet?<a href="">Create one</a>
            </p>
            <div className="py-2 w-full">
              <label className="text-primary-body font-medium">
                Email Address
              </label>
              <input
                className="rounded border-gray-300 w-full my-1 text-primary-body"
                type="email"
                placeholder="name@email.com"
                name="email"
              />
            </div>

            <div className="w-full">
              <label className="text-primary-body font-medium">Password</label>
              <div className="w-full my-1 relative">
                <input
                  className="rounded border-gray-300 w-full relative top-0 pr-10"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="py-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded ">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;
