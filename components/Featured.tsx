import { RootState } from "@/redux/store";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Featured = ({ car }: any) => {
  const max = 20;
  const filteredList = useSelector(
    (state: RootState) => state.cars.filteredCars
  );

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="relative w-full">
        <img
          src={car?.image || "/car1.jpg"}
          className="w-full h-[165px] object-cover transform hover:scale-110 transition duration-500 ease-in-out"
          alt="car"
        />
        <AiOutlineStar
          color="#BFCCB5"
          size={20}
          className="absolute bottom-4 left-4"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <TfiGallery color="#BFCCB5" />
          <p className="text-[#BFCCB5] font-bold">{filteredList?.length}</p>
        </div>
      </div>
      <div className="bg-[#222732] px-6 pt-3 pb-6">
        <p className="text-white text-[16px] mb-2">
          {car?.make} . {car.area}
        </p>
        <p className="text-white text-[16px] font-medium mb-2">
          {car?.desc.length > max
            ? `${car?.desc.substring(0, max)}...`
            : car?.desc}
        </p>
        <h2 className="text-white text-[20px] font-semibold">
          AED {car?.price}
        </h2>
        <hr className="border-top border-gray-500 my-4" />
        <div className="flex gap-4 items-center">
          <div className="bg-[#FF4605] rounded-md flex items-center justify-center px-2 w-16 h-8">
            <p className="text-white">{car?.year}</p>
          </div>
          <p className="text-gray-200 text-[15px]">
            {car?.kilometers}km
          </p>
          <p className="text-gray-300 text-[15px]">
            {car?.regionalSpecs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
