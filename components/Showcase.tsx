import React from "react";
import { BsGooglePlay } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LogoCarousel from "./LogoCarousel";

const Showcase = () => {
  return (
    <div className="max-w-[1280px] mx-auto ">
      <div className="w-full my-[80px]">   
        <LogoCarousel />     
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-4 w-full">
        <div className="flex-1 relative bg-[#FF4605] px-8 py-10 rounded-0 md:rounded-md">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-white hidden md:flex text-[45px] leading-[45px] font-bold mb-8">
              Download<br></br> our app
            </h2>
            <h2 className="text-white flex md:hidden text-[40px] text-center leading-[45px] font-bold mb-8">
              Download our app
            </h2>
            <div className="flex flex-row md:flex-col gap-2">
            <button className="flex gap-2 px-3 md:px-6 py-3 bg-white rounded-full mb-3 w-fit items-center md:w-[180px] font-bold">
              <BsGooglePlay color="#FF4605" size={20} />
              For Android
            </button>
            <button className="flex gap-2 px-3 md:px-6 py-3 bg-white mb-3 rounded-full w-fit md:w-[180px] items-center font-bold">
              <BsApple color="#FF4605" size={20} />
              For Ios
            </button>
            </div>
          </div>
          <img src="/phone.png" className="w-[250px] hidden md:block absolute top-5 right-5" />
        </div>
        <div className="flex flex-col md:flex-row flex-1 items-start md:items-center justify-between w-full bg-[#222732] p-8 md:p-14 rounded-0 md:rounded-md gap-8">
          <div className="flex-1 flex flex-col gap-10">
            <h2 className="text-white text-[35px] md:text-[45px] font-bold leading-[50px] ">
              How to buy a car?
            </h2>
            <button className="flex gap-2 px-6 py-3 bg-transparent border border-[#FF4605] text-white rounded-md w-max mr-auto">
              Read More
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">best deals</p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">sell your car</p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">car book values</p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">car dealers</p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">compare prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
