import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-8 md:px-0">
      <h2 className="text-center text-black text-[40px] md:text-[50px] leading-[48px] font-bold">Why choose us?</h2>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="flex-1 flex  justify-center flex-col items-center">
          <div className="bg-[#FFECE6] rounded-full p-6 flex justify-center w-20 h-20 items-center mb-10">
            <img src="/ribbon.png" alt="ribbon" className="z-10 w-full" />
          </div>
          <h2 className="text-black text-center text-[25px] font-semibold mb-8">Wide range of brands</h2>
          <p className="text-gray-500 text-[16px] text-center leading-[30px]">
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center">
          <div className="bg-[#ECFFE6] rounded-full p-6 flex justify-center w-20 h-20 items-center mb-10">
            <img src="/customer.png" alt="ribbon" className="z-10 w-full" />
          </div>
          <h2 className="text-black text-center  text-[25px] font-semibold mb-8">Trusted by our clients</h2>
          <p className="text-gray-500 text-[16px] text-center leading-[30px]">
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center">
          <div className="bg-[#E6F1FF] rounded-full p-6 flex justify-center w-20 h-20 items-center mb-10">
            <img src="/money.png" alt="ribbon" className="z-10 w-full" />
          </div>
          <h2 className="text-black text-[25px] text-center mb-8 font-semibold">Fast & easy financing</h2>
          <p className="text-gray-500 text-[16px] text-center leading-[30px]">
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
