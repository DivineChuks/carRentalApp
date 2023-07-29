import React from "react";

const Newsletter = () => {
  return (
    <div className="py-[80px] md:py-[150px] px-8 md:px-0">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <div className="flex-1">
          <h2 className="text-[30px] font-bold">Newsletter</h2>
        </div>
        <div className="flex items-center gap-2" style={{ flex: 2 }}>
          <input
            type="email"
            className="border border-gray-300 rounded-md px-2 py-3 w-[65%] focus:outline-none text-gray-400"
            placeholder="Your email address"
          />
          <button className="bg-[#FF4605] text-[14px] w-max px-6 py-[13px] rounded-md text-white">
            Sign Up
          </button>
        </div>
        <div className="flex-1">
          <p className="text-[16px]">
            Subscribe to our newsletter and stay updated with our offer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
