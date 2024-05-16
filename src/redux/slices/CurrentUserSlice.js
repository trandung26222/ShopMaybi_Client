import { createSlice } from "@reduxjs/toolkit";

const initState = {
  CurrentUser: {
    has: false,
    uid: "",
    email: "",
  },
};

export const CurrentUserSlice = createSlice({
  name: "CurrentUserSlice",
  initialState: initState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.CurrentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;
