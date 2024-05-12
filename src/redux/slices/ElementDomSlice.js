import { createSlice } from "@reduxjs/toolkit";

const initState = {
  TippyCart: true,
  BackToTopButton: false,
};

export const TippyCartSlice = createSlice({
  name: "ElementDomSlice",
  initialState: initState,
  reducers: {
    toggleTippyCart: (state) => {
      state.TippyCart = !state.TippyCart;
    },
    toggleBackToTopButton: (state, action) => {
      state.BackToTopButton = action.payload;
    },
  },
});

export const { toggleTippyCart, toggleBackToTopButton } =
  TippyCartSlice.actions;
export default TippyCartSlice.reducer;
