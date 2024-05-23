import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../CallFireBase/getCurrentUser";

const initState = {
  CurrentUser: {
    has: false,
    gioitinh: "",
    phonenumber: "",
    avatar: "",
    ngaysinh: null,
    username: "",
  },
};

export const CurrentUserSlice = createSlice({
  name: "CurrentUserSlice",
  initialState: initState,
  reducers: {
    clearCurrentUser: (state) => {
      state.CurrentUser = { ...initState.CurrentUser };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.CurrentUser = {
        ...state.CurrentUser,
        ...action.payload,
        has: true,
      };
    });
  },
});

export const { clearCurrentUser } = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;
