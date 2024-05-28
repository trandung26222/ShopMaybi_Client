import { createSlice } from "@reduxjs/toolkit";

const initState = {
  BackToTopButton: false,
  Sidebar: false,
  CartPreview: false,
  Search: false,
};

export const TippyCartSlice = createSlice({
  name: "ElementDomSlice",
  initialState: initState,
  reducers: {
    toggleBackToTopButton: (state, action) => {
      state.BackToTopButton = action.payload;
    },
    toggleSidebar: (state) => {
      state.Sidebar = !state.Sidebar;
    },
    toggleCartPreview: (state) => {
      state.CartPreview = !state.CartPreview;
    },
    toggleSearch: (state) => {
      state.Search = !state.Search;
    },
  },
});

export const {
  toggleBackToTopButton,
  toggleSidebar,
  toggleCartPreview,
  toggleSearch,
} = TippyCartSlice.actions;
export default TippyCartSlice.reducer;
