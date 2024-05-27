import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConfig } from "~/utils/config/apiConfig";
import axios from "axios";

export const getCart = createAsyncThunk("getCart", async (userId) => {
  const res = await axios.get(apiConfig.cart.getCart + "/" + userId);
  return res.data;
});

export const deleteProductonCart = createAsyncThunk(
  "deleteProductonCart",
  async (body) => {
    await axios.delete(apiConfig.cart.deleteProductonCart, {
      data: body,
    });
    return body;
  }
);

export const sub1OnCart = createAsyncThunk("sub1OnCart", async (body) => {
  await axios.post(apiConfig.cart.sub1OnCart, { data: body });
  return body;
});

export const addToCart = createAsyncThunk("addToCart", async (body) => {
  var res = await axios.post(apiConfig.cart.addToCart, { data: body });
  return res.data;
});
