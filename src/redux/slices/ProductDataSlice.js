import { createSlice } from "@reduxjs/toolkit";
import { statusFetch } from "~/utils/statusFetch";
import { fetchDataProducts } from "../fetchData/fetchDataProducts";

const initState = {
  ProductData: [],
  status: statusFetch.IDLE,
  Product: {},
};

export const ProductCartSlice = createSlice({
  name: "ProductDataSlice",
  initialState: initState,
  reducers: {
    setProduct: (state, action) => {
      state.Product = state.ProductData.find(
        (item) => item.id === parseInt(action.payload)
      );
      localStorage.setItem("Product", JSON.stringify(state.Product));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProducts.pending, (state) => {
      state.status = statusFetch.LOADING;
    });
    builder.addCase(fetchDataProducts.fulfilled, (state, action) => {
      state.status = statusFetch.IDLE;
      state.ProductData = action.payload;
    });
    builder.addCase(fetchDataProducts.rejected, (state, action) => {
      state.status = statusFetch.FAILED;
    });
  },
});

export const { setProduct } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;
