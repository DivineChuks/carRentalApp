"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { makes } from "@/utils/data";
import { FilterNameProps } from "@/utils/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getCarsByMake } from "@/redux/features/carSlice";

const MakeFilterItem: React.FC<FilterNameProps> = ({ filterName }) => {
  const dispatch: AppDispatch = useDispatch();
  const [openMake, setOpenMake] = useState(false);
  const [makeInput, setMakeInput] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenMake(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMakeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeInput(e.target.value);
  };

  const handleSelectMake = (name: string) => {
    setSelectedMake(name);
    dispatch(getCarsByMake(name));
  };

  const filteredMakes = makes.filter((make) =>
    make.name.toLowerCase().includes(makeInput.toLowerCase())
  );

  return (
    <div
      className="flex-col flex-1 border-r border-gray-300 cursor-pointer"
      onClick={() => setOpenMake(!openMake)}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="font-bold text-[15px]">{filterName}</p>
          <input
            type="text"
            placeholder={selectedMake ? selectedMake : "eg Toyota"}
            className="text-[15px] text-gray-500 w-full focus:outline-none"
            onChange={handleMakeInputChange}
          />
        </div>
        <div className="mr-4">
          {openMake ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>
      {openMake && (
        <div
          ref={containerRef}
          className="absolute flex flex-col md:left-[140px] top-16 h-fit md:h-[300px] w-fit md:w-[215px] px-4 py-8 shadow-md shadow-gray-300 overflow-y-auto bg-white z-10"
        >
          {filteredMakes.map((make) => (
            <p
              className="mb-2 text-gray-500 text-[15px]"
              key={make.id}
              onClick={() => handleSelectMake(make.name)}
            >
              {make.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeFilterItem;
