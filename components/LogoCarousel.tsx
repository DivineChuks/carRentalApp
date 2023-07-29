"use client";
import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const LogoCarousel = () => {
  const logos = [
    "/themeforest.png",
    "/codecanyon.png",
    "/photodune.png",
    "/audiojungle.png",
    "/codecanyon.png",
    "/graphicriver.png",
    "/audiojungle.png",
    "/photodune.png",
   
  ];
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    const newStartIndex =
      (startIndex - itemsPerPage + logos.length) % logos.length;
    setStartIndex(newStartIndex);
  };
  const handleNext = () => {
    const newStartIndex = (startIndex + itemsPerPage) % logos.length;
    setStartIndex(newStartIndex);
  };
  

  return (
    <div className="flex gap-4 items-center justify-between">
      <div
        className="w-[50px] h-[50px] shadow-xl border-blue-500 cursor-pointer flex items-center justify-center rounded-full"
        onClick={handlePrev}
      >
        <FiChevronLeft />
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
        {logos
          .slice(startIndex, startIndex + itemsPerPage)
          .map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Logo 1"
              className="object-contain w-[100px] md:w-[250px] h-[40px] grayscale hover:grayscale-0 cursor-pointer"
            />
          ))}
      </div>
      <div
        className="w-[50px] h-[50px] shadow-xl border-blue-500 cursor-pointer flex items-center justify-center rounded-full"
        onClick={handleNext}
      >
        <FiChevronRight />
      </div>
    </div>
  );
};
export default LogoCarousel;
