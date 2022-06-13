import { createSlice } from "@reduxjs/toolkit";

export const toggleMenu: any = createSlice({
  name: "toggleMenu",
  initialState: {
    value: false,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleSwitch } = toggleMenu.actions;

export default toggleMenu.reducer;
