import { createSlice } from "@reduxjs/toolkit";

var initState = {
  CurrentCart: [],
};

export const CurrentCartSlice = createSlice({
  name: "CurrentCartSlice",
  initialState: initState,
  reducers: {
    setCurrentCart: (state, action) => {
      state.CurrentCart = action.payload;
    },
    deleteCurrentCart: (state, action) => {
      const indexToDelete = state.CurrentCart.findIndex(
        (item) => item.id === action.payload
      );

      if (indexToDelete !== -1) {
        state.CurrentCart.splice(indexToDelete, 1);
      }
    },
  },
});

export const { setCurrentCart, deleteCurrentCart } = CurrentCartSlice.actions;
export default CurrentCartSlice.reducer;
