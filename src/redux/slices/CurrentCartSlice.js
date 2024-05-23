import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../CallFireBase/fetchCart";
import { statusFetch } from "~/utils/statusFetch";
import { RemoveItemCart } from "../CallFireBase/RemoveItemCart";

var initState = {
  status: statusFetch.IDLE,
  CurrentCart: [],
};

export const CurrentCartSlice = createSlice({
  name: "CurrentCartSlice",
  initialState: initState,
  reducers: {
    clearCurrentCart: (state, action) => {
      state.CurrentCart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = statusFetch.LOADING;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = statusFetch.IDLE;
        state.CurrentCart = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = statusFetch.FAILED;
      })
      .addCase(RemoveItemCart.fulfilled, (state, action) => {
        const indexToDelete = state.CurrentCart.findIndex(
          (item) => item.id === action.payload
        );
        if (indexToDelete !== -1) {
          state.CurrentCart.splice(indexToDelete, 1);
        }
      });
  },
});

export const { clearCurrentCart } = CurrentCartSlice.actions;
export default CurrentCartSlice.reducer;
