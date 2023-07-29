"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { BiShoppingBag } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
import { BiCompass } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Featured from "./Featured";
import { getCarsByRegion } from "@/redux/features/carSlice";

const CarList = () => {
  const dispatch: AppDispatch = useDispatch()
  const carList = useSelector((state: RootState) => state?.cars?.filteredCars);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = carList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(carList.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % carList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="max-w-[1280px] mx-auto overflow-x-hidden mt-[80px] md:mt-[150px]">
        <div className="w-full justify-between items-center flex ">
          <h2 className="text-[30px] text-center md:text-left md:text-[50px] flex-1 font-bold mb-8">
            Featured Listing
          </h2>
          <div className="hidden md:flex flex-1 items-center justify-end gap-2">
            <button className="border border-[#FF4605] px-10 py-3 bg-[#FFF0EB] rounded-md text-[#FF4605]" onClick={() => dispatch(getCarsByRegion("GCC Specs"))}>
              GCC Spec
            </button>
            <button className="border border-gray-500 px-10 py-3 bg-gray-400 text-dark rounded-md" onClick={() => dispatch(getCarsByRegion("Euro Specs"))}>
              Euro Spec
            </button>
          </div>
        </div>
        <div className="grid grid-col md:grid-cols-4 gap-6 mt-8 px-8 md:px-0">
          {carList.length >= 1
            ? currentItems?.map((car, index) => (
                <Featured key={index} car={car} />
              ))
            : "No result found"}
        </div>
      </div>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-black rounded-md text-white ml-4">
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-black rounded-md text-white mr-4">
            <BsChevronLeft />
          </span>
        }
        pageClassName="border border-[#FF4605] hover:bg-[#FF4605] w-10 h-10 flex justify-center items-center rounded-md mr-4"
        containerClassName="flex items-center justify-center mt-8 mb-4"
        activeClassName="bg-[#FF4605] text-white"
      />
    </>
  );
};

export default CarList;
