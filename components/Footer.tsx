import Image from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#222732] text-white px-[2rem] md:px-0 pt-[70px] pb-8 overflow-x-hidden">
      <div className="grid grid-col place-items-start gap-4 md:grid-cols-8 w-full max-w-[1280px] mx-auto">
        <div className="col-span-1 flex flex-col gap-4 mt-2">
          <Image src="/logo.png" alt="footer" width={150} height={150} />
        </div>
        <div className="col-span-1 flex flex-col gap-4 pt-8 md:pt-0">
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[17px] font-medium text-gray-100">
              Listing
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[17px] font-medium text-gray-100">
              FAQ
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[18px] font-medium text-gray-100">
              About
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4 pt-8 md:pt-0">
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[17px] font-medium text-gray-100">
              Listing
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[17px] font-medium text-gray-100">
              FAQ
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsDot color="#FF4605" size={40} />
            <p className="cursor-pointer text-[18px] font-medium text-gray-100">
              About
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 flex justify-start w-full pt-8 md:pt-0">
          <p className="w-[90%] text-[17px] leading-[41px]">
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 gap-6 pt-8 md:pt-0 flex flex-col items -end">
          <p className="text-white text-[30px] font-bold">
            (123){" "}
            <span className="text-[30px] font-bold text-[#FF4605]">
              {" "}
              456-78901{" "}
            </span>
          </p>
          <p className="cursor-pointer text-[17px] font-medium text-gray-100">support@vehica.com</p>
          <p className="cursor-pointer text-[17px] font-medium text-gray-100">West 12th Street</p>
          <p className="cursor-pointer text-[17px] font-medium text-gray-100"> New York, NY, USA</p>
        </div>
      </div>
      <hr className="border-1 h-px bg-gray-100 w-full  mx-auto mt-14 mb-7" />
      <div className="max-w-[1280px] w-full mx-auto">
        <p className="cursor-pointer text-[17px] font-medium text-gray-100 ">
          Copyright © 2021. All rights reserved. Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
