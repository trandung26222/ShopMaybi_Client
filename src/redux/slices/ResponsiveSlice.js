import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWidth: window.innerWidth,
};

export const ResponsiveSlice = createSlice({
  name: "ResponsiveSlice",
  initialState,
  reducers: {
    setCurrentWidth: (state, action) => {
      state.currentWidth = action.payload;
    },
  },
});

export const { setCurrentWidth } = ResponsiveSlice.actions;
export default ResponsiveSlice.reducer;
