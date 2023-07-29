"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FilterNameProps } from "@/utils/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getCarsByPriceRange } from "@/redux/features/carSlice";

const PriceFilterItem: React.FC<FilterNameProps> = ({ filterName }) => {
  const dispatch: AppDispatch = useDispatch();
  const [openPrice, setOpenPrice] = useState(false);
  const [priceInputs, setPriceInputs] = useState({
    from: "",
    to: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpenPrice(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handlePriceInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClearInput = () => {
    setPriceInputs({
      from: "",
      to: "",
    });
  };

  const handleApplyFilters = () => {
    dispatch(
      getCarsByPriceRange({
        from: parseInt(priceInputs.from),
        to: parseInt(priceInputs.to),
      })
    );
  };

  return (
    <div
      onClick={() => setOpenPrice(true)}
      className="flex-col flex-1 border-r border-gray-300 cursor-pointer bg-white"
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="font-bold text-[15px]">{filterName}</p>
          <p className="text-[14px] text-gray-400">Select</p>
        </div>
        <div className="mr-4">
          {openPrice ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>
      {openPrice && (
        <div
          ref={containerRef}
          className="absolute left-0 md:left-[400px] top-16 w-fit md:w-[400px] py-8 shadow-md shadow-gray-300 bg-white z-10"
        >
          <div className="flex justify-between gap-4 items-center w-full px-4 mb-8">
            <div className="flex-1">
              <label className="text-gray-400 text-[14px]">From</label>
              <input
                placeholder="0"
                name="from"
                value={priceInputs.from}
                onChange={handlePriceInputChange}
                className="border border-gray-300 rounded-md p-3 w-full mt-2 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-400 text-[14px]">UpTo</label>
              <input
                placeholder="Any"
                onChange={handlePriceInputChange}
                value={priceInputs.to}
                name="to"
                className="border border-gray-300 mt-2 rounded-md p-3 w-full focus:outline-none"
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-between w-full mt-8 gap-8 px-4">
            <div className="flex-3">
              <button
                onClick={handleClearInput}
                className="w-full bg-transparent border border-gray-400 px-6 py-2 rounded-md text-gray-400"
              >
                Clear
              </button>
            </div>
            <div className="flex-1">
              <button
                className="w-full text-white bg-black py-2 rounded-md"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilterItem;
