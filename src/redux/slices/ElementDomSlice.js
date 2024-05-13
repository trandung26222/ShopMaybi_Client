import { createSlice } from "@reduxjs/toolkit";

const initState = {
  TippyCart: true,
  BackToTopButton: false,
  Sidebar: false,
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
    toggleSidebar: (state) => {
      state.Sidebar = !state.Sidebar;
    },
  },
});

export const { toggleTippyCart, toggleBackToTopButton, toggleSidebar } =
  TippyCartSlice.actions;
export default TippyCartSlice.reducer;
