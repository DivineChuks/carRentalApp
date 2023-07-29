import React from "react";
import CityFilterItem from "./CityFilterItem";
import MakeFilterItem from "./MakeFilterItem";
import PriceFilterItem from "./PriceFilterItem";
import YearFilterItem from "./YearFilterItem";
import ModelFilterItem from "./ModelFilterItem";
import RegionalFilterItem from "./RegionalFilterItem";


const Filter = () => {
  return (
    <div className="p-10">
      <div className="relative bg-white h-fit md:h-16 items-center w-full border border-gray-300 px-4 py-2 rounded-xl flex-wrap md:flex-nowrap flex justify-between gap-8">
        <CityFilterItem filterName="City" />
        <MakeFilterItem filterName="Make" />
        <ModelFilterItem filterName="Model" />
        <PriceFilterItem filterName="Price" />
        <YearFilterItem filterName="Year" />
        <RegionalFilterItem filterName="Filters" />
      </div>
    </div>
  );
};

export default Filter;
