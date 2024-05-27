import { createSlice } from "@reduxjs/toolkit";
const initState = {
  data: {},
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState: initState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export default testSlice.reducer;
