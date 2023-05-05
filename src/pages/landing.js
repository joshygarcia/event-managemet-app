import "../App.css";
import React from "react";

function landing() {
  return (
    <div className="relative text-center items-center">
      <div className="">
        <img src="/images/Landingbg.png" alt="no image" />
      </div>
      <div className="absolute left-[82%] mx-auto top-[5%]">
        <a href="/Auth">
          <button className="bg-[#4339F2] py-3 px-20 rounded-[20px] text-3xl text-white font-semibold">
            Login{" "}
          </button>
        </a>
      </div>
      <div className="absolute right-[40%] mx-auto top-[14%]">
        <div>
          <img src="/images/Logo.png" alt="no image" />
        </div>
        <div className="mt-32">
          <a href="/register">
            <button className="bg-[#4339F2] py-3 px-20 rounded-[20px] text-3xl text-white font-semibold">
              Register{" "}
            </button>
          </a>
        </div>
      </div>
      <div className="absolute top-[77%] w-[60%] text-left ml-28">
        <p className="text-white text-5xl  font-semibold playfair">
          Creating Unforgettable Experiences
        </p>
        <p className="text-white montserrat text-2xl">
          Our dedicated professionals handle every detail for a seamless
          experience, providing access to top vendors and cutting-edge
          technology. Choose Level Up to ensure perfection at your next event.
        </p>
      </div>
    </div>
  );
}
export default landing;
