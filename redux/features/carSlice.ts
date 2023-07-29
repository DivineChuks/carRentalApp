// carSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { allCars } from "../../utils/data";
import { initialStateProps } from "@/utils/types";

const initialState: initialStateProps = {
  carsList: allCars,
  filteredCars: allCars[0].cars,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    getCarsByCity: (state, action) => {
      const selectedCityCars = state.carsList.find(
        (car) => car.city === action.payload
      )?.cars;
      if (selectedCityCars) {
        state.filteredCars = selectedCityCars;
      }
    },
    getCarsByMake: (state, action) => {
      const selectedMake = state.carsList.flatMap((cityData) =>
        cityData.cars.filter((car) => car.make === action.payload)
      );
      state.filteredCars = selectedMake;
    },
    getCarsByModel: (state, action) => {
      const selectedModel = state.carsList.flatMap((cityData) =>
        cityData.cars.filter((car) => car.model === action.payload)
      );
      state.filteredCars = selectedModel;
    },

    getCarsByPriceRange: (state, action) => {
      const { from, to } = action.payload;
      const priceRange = state.carsList.flatMap((cityData) =>
        cityData.cars.filter((car) => car.price >= from && car.price <= to)
      );
      state.filteredCars = priceRange;
    },
    getCarsByYearRange: (state, action) => {
      const { from, to } = action.payload;
      const yearRange = state.carsList.flatMap((cityData) =>
        cityData.cars.filter((car) => car.year >= from && car.year <= to)
      );
      state.filteredCars = yearRange;
    },
    getCarsByRegion: (state, action) => {
      const selectedRegion = state.carsList.flatMap((cityData) =>
        cityData.cars.filter((car) => car.regionalSpecs === action.payload)
      );
      state.filteredCars = selectedRegion;
    },
  },
});

export const {
  getCarsByCity,
  getCarsByMake,
  getCarsByPriceRange,
  getCarsByYearRange,
  getCarsByModel,
  getCarsByRegion
} = carSlice.actions;

export default carSlice.reducer;
