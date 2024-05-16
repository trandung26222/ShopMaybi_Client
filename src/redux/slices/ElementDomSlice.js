import { createSlice } from "@reduxjs/toolkit";

const initState = {
  TippyCart: true,
  BackToTopButton: false,
  Sidebar: false,
  CartPreview: false,
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
    toggleCartPreview: (state) => {
      state.CartPreview = !state.CartPreview;
    },
  },
});

export const {
  toggleTippyCart,
  toggleBackToTopButton,
  toggleSidebar,
  toggleCartPreview,
} = TippyCartSlice.actions;
export default TippyCartSlice.reducer;
