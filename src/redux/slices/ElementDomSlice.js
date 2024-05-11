import { createSlice } from "@reduxjs/toolkit";

const initState = {
  TippyCart: true,
};

export const TippyCartSlice = createSlice({
  name: "ElementDomSlice",
  initialState: initState,
  reducers: {
    toggleTippyCart: (state) => {
      state.TippyCart = !state.TippyCart;
    },
  },
});

export const { toggleTippyCart } = TippyCartSlice.actions;
export default TippyCartSlice.reducer;
