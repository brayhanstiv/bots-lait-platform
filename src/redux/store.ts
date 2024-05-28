// Packages
import { configureStore } from "@reduxjs/toolkit";

// Slices
import dropdownReducer from "./slices/dropdownSlice";

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export default store;
