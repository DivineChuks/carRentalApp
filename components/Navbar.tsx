import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-16 md:gap-0 h-16 w-full items-center z-50 text-white absolute top-5 px-8 py-8">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          className="object-contain w-[130px] md:w-[200px] h-[80px]"
        />
      </div>
      <div className="hidden md:flex items-center gap-6 text-white text-[18px]">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
      </div>
      <button className="bg-[#FF4605] px-6 md:px-8 py-2 md:py-3 rounded-md text-[18px]">
        Register
      </button>
    </div>
  );
};

export default Navbar;
