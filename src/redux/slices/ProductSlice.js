import { createSlice } from "@reduxjs/toolkit";
import { statusFetch } from "~/utils/statusFetch";
import { getAllProducts } from "~/CallAPI/product";
import { getProductByID } from "~/CallAPI/product";

const initState = {
  Products: [],
  totalProducts: 1,
  status: statusFetch.IDLE,
  ProductPage: {},
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initState,

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = statusFetch.LOADING;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = statusFetch.IDLE;
      state.Products = action.payload.products;
      state.totalProducts = action.payload.totalProducts;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.status = statusFetch.FAILED;
    });
    builder.addCase(getProductByID.fulfilled, (state, action) => {
      state.ProductPage = action.payload;
    });
  },
});

export default ProductSlice.reducer;
