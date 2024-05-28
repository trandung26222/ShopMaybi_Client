import { createSlice } from "@reduxjs/toolkit";
import { statusFetch } from "~/utils/statusFetch";
import { getCart, deleteProductonCart, addToCart } from "~/CallAPI/cart";

var initstate = {
  status: statusFetch.IDLE,
  Cart: [],
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: initstate,
  reducers: {
    clearCart: (state, action) => {
      state.Cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = statusFetch.IDLE;
        state.Cart = [...action.payload];
      })
      .addCase(getCart.pending, (state) => {
        state.status = statusFetch.LOADING;
      })
      .addCase(deleteProductonCart.fulfilled, (state, action) => {
        var { productId, mau, size } = action.payload;
        const indexToRemove = state.Cart.findIndex(
          (c) => c.productId === productId && c.mau === mau && c.size === size
        );
        if (indexToRemove !== -1) {
          state.Cart.splice(indexToRemove, 1);
        }
      })
      .addCase(addToCart.pending, (state) => {
        state.status = statusFetch.LOADING;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = statusFetch.IDLE;
      });
  },
});

export default CartSlice.reducer;
