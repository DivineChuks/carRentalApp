import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="flex bg-poster bg-cover bg-center relative flex-col justify-center align-center h-screen">
    <Navbar />
      <video
        autoPlay
        loop
        muted
        className="hidden md:block absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source
          src="https://files.vehica.com/video/vehica-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative max-w-[1400px] mt-[80px] md:mt-0 mx-auto z-10">
        <h2 className="font-bold text-[40px] leading-[48px] md:text-[60px] text-white text-center mb-4">
          Find Your <span className="text-[#FF4605]">Perfect</span> Car
        </h2>
        <Filter />
      </div>
    </div>
  );
};

export default Hero;
