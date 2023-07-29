"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FilterNameProps } from "@/utils/types";
import { regionalSpecs } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getCarsByRegion } from "@/redux/features/carSlice";

const RegionalFilterItem: React.FC<FilterNameProps> = ({ filterName }) => {
  const dispatch:AppDispatch = useDispatch()
  const [openFilter, setOpenFilter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState("")
  const [checkFilter, setCheckFilter] = useState(false);

  const filteredList = useSelector(
    (state: RootState) => state.cars.filteredCars
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleRegionClick = (regionName: string) => {
    setSelectedRegion(regionName);
    console.log(regionName)
    setCheckFilter(true);
    dispatch(getCarsByRegion(regionName));
  };

  return (
    <div
      onClick={() => setOpenFilter(true)}
      className="flex-col flex-1 cursor-pointer"
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="font-bold text-[15px]">{filterName}</p>
          <p className="text-gray-400 text-[14px]">{selectedRegion ? selectedRegion : "select"}</p>
        </div>
        <div className="mr-4">
          {openFilter ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>
      {openFilter && (
        <div className="absolute top-16 right-0 w-fit md:w-[450px] py-8 shadow-md shadow-gray-300 bg-white">
          <div ref={containerRef} className="flex px-4 gap-4 flex-wrap mb-8">
            {regionalSpecs.map((region) => (
              <button
                key={region.id}
                className="bg-transparent border border-gray-300 rounded-full px-2 md:px-6 py-2"
                onClick={() => handleRegionClick(region.title)}
              >
                {region.title}
              </button>
            ))}
          </div>
          <hr />
          <div className="flex justify-between w-full mt-8 gap-8 px-4">
            <div className="flex-1">
              <button className="w-full text-white bg-black py-2 rounded-md cursor-pointer">
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

export default RegionalFilterItem;
