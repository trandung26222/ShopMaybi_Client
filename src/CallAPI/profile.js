import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConfig } from "~/utils/config/apiConfig";
import axios from "axios";

export const getCurrentUser = createAsyncThunk(
  "getCurrentUser",
  async (uid) => {
    const res = await axios.get(apiConfig.profile.getProfile + "/" + uid);

    var tmp = res.data;
    const dateObject = new Date(tmp.ngaysinh);
    const milliseconds = dateObject.valueOf();

    tmp.ngaysinh = milliseconds;

    return tmp;
  }
);

export const updateProfile = createAsyncThunk("updateProfile", async (data) => {
  const res = await axios.put(apiConfig.profile.updateProfile, data);
  return data;
});
