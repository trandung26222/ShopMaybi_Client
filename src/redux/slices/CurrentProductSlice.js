import { createSlice } from "@reduxjs/toolkit";

var initState = {
  CurrentProduct: {},
};

export const CurrentProductSlice = createSlice({
  name: "CurrentProductSlice",
  initialState: initState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.CurrentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = CurrentProductSlice.actions;
export default CurrentProductSlice.reducer;
