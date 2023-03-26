import "../App.css";
import React, { useState, useEffect } from "react";

function Auth() {
  const [hasAccount, setHasAccount] = useState(true);
  function account() {
    if (hasAccount == true) {
      setHasAccount(false);
    } else {
      setHasAccount(true);
    }
    console.log(hasAccount);
  }

  return (
    <div className="w-full relative">
      <div className=" flex">
        <div className="w-1/2 h-screen items-center bg-violet-500 ">
          <img src="images/logo.png" className="" alt="logo" />
        </div>
        <div className="bg-white text-center px-8 w-1/2 ">
          {hasAccount && (
            <div className="border-2 mx-auto rounded  mt-60 pt-4 items-center w-2/5">
              <p className="text-2xl font-semibold">Login</p>
              <p>
                Not registered yet?
                <a onClick={account}>Create one</a>
              </p>
              <div className="pt-2 px-4 text-left w-full">
                <label className="text-primary-body  font-medium">
                  Email Address
                </label>
                <input
                  className="rounded border-gray-300 w-full my-1 text-primary-body"
                  type="email"
                  placeholder="name@email.com"
                  name="email"
                />
              </div>

              <div className="w-full  px-4 text-left">
                <label className="text-primary-body font-medium">
                  Password
                </label>
                <div className="w-full my-1 relative">
                  <input
                    className="rounded border-gray-300 w-full relative top-0 pr-10"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </div>
              <div className="py-4 px-4">
                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-2 w-full  rounded-full ">
                  {" "}
                  LOGIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Auth;
