import { createSlice } from "@reduxjs/toolkit";

const initState = {
  ProductData: [],
};

export const ProductCartSlice = createSlice({
  name: "ProductDataSlice",
  initialState: initState,
  reducers: {
    setProductData: (state, action) => {
      state.ProductData = action.payload;
    },
  },
});

export const { setProductData } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;
