"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { FilterNameProps } from "@/utils/types";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getCarsByCity } from "@/redux/features/carSlice";
import { cities } from "@/utils/data";

const CityFilterItem: React.FC<FilterNameProps> = ({ filterName }) => {
  const dispatch: AppDispatch = useDispatch();
  const [openCity, setOpenCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Dubai");
  const [checkFilter, setCheckFilter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredList = useSelector(
    (state: RootState) => state.cars.filteredCars
  );

  const handleCityClick = (cityName: string) => {
    setSelectedCity(cityName);
    setCheckFilter(true)
    dispatch(getCarsByCity(cityName));
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenCity(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="flex-col flex-1 border-r border-gray-300 cursor-pointer"
      onClick={() => setOpenCity(true)}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="font-bold text-[15px]">{filterName}</p>
          <p className="text-gray-400 text-[14px]">{selectedCity}</p>
        </div>
        <div className="mr-4">
          {openCity ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>
      {openCity && (
        <div
          className="absolute top-16 left-0 w-fit md:w-[350px] h-fit py-8 shadow-md shadow-gray-300 bg-white z-50"
        >
          <div ref={containerRef} className="flex px-4 gap-4 flex-wrap mb-8">
            {cities.map((city) => (
              <button
                key={city.id}
                className="bg-transparent border border-gray-300 rounded-full px-6 py-2"
                onClick={() => handleCityClick(city.name)}
              >
                {city.name}
              </button>
            ))}
          </div>
          <hr />
          <div className="flex justify-between w-full mt-8 gap-8 px-4">
            <div className="flex-1">
              <button
                className="w-full text-white bg-black py-2 rounded-md cursor-pointer"
              >
                {checkFilter
                  ? `Show ${filteredList.length} results `
                  : "Apply Filters"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityFilterItem;
