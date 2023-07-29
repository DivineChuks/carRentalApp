"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FilterNameProps } from "@/utils/types";
import { models } from "@/utils/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getCarsByModel } from "@/redux/features/carSlice";

const ModelFilterItem: React.FC<FilterNameProps> = ({ filterName }) => {
  const dispatch:AppDispatch = useDispatch()
  const [modelInput, setModelInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("")
  const [openModel, setOpenModel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenModel(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModelInput(e.target.value);
  };

  const filteredModel = models.filter((model) =>
    model.name.toLowerCase().includes(modelInput.toLowerCase())
  );

  const handleSelectedModel = (name: string) => {
    setSelectedModel(name)
    dispatch(getCarsByModel(name))
  }

  return (
    <div
      onClick={() => setOpenModel(!openModel)}
      className="flex-col flex-1 border-r border-gray-300 cursor-pointer bg-white"
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="font-bold text-[15px]">{filterName}</p>
          <input
            type="text"
            placeholder={selectedModel ? selectedModel : "Type a model name..."}
            className="text-gray-400 text-[14px] focus:outline-none w-full"
            onChange={handleInputChange}
          />
        </div>
        <div className="mr-4">
          {openModel ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>
      {openModel && (
        <div
          ref={containerRef}
          className="absolute flex flex-col left-0 md:left-[275px] top-16 h-fit md:h-[300px] w-fit md:w-[215px] px-4 py-8 shadow-md shadow-gray-300 overflow-y-auto bg-white z-10"
        >
          {filteredModel.map((model) => (
            <p className="mb-2 text-gray-500 text-[16px]" key={model.id} onClick={() => handleSelectedModel(model.name)}>
              {model.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelFilterItem;
