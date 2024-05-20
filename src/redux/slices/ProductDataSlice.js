import { createSlice } from "@reduxjs/toolkit";

const initState = {
  ProductData: [],
  Product: {},
};

export const ProductCartSlice = createSlice({
  name: "ProductDataSlice",
  initialState: initState,
  reducers: {
    setProductData: (state, action) => {
      state.ProductData = action.payload;
    },
    setProduct: (state, action) => {
      state.Product = state.ProductData.find(
        (item) => item.id === parseInt(action.payload)
      );
      localStorage.setItem("Product", JSON.stringify(state.Product));
    },
  },
});

export const { setProductData, setProduct } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;
