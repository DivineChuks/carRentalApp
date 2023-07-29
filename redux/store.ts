import { configureStore } from "@reduxjs/toolkit";
import carSliceReducer from "./features/carSlice";

export const store = configureStore({
  reducer: {
    cars: carSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
