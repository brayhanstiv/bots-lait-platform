import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLanguageDropdownOpen: false,
  isUserDropdownOpen: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: initialState,
  reducers: {
    openLanguageDropdown: (state) => {
      state.isLanguageDropdownOpen = true;
      state.isUserDropdownOpen = false;
    },
    openUserDropdown: (state) => {
      state.isUserDropdownOpen = true;
      state.isLanguageDropdownOpen = false;
    },
  },
});

export const { openLanguageDropdown, openUserDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
