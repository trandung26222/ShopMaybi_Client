import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConfig } from "~/utils/config/apiConfig";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllpr", async (params) => {
  var res = await axios.get(apiConfig.product.getAllProducts, { params });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.data;
});

export const getProductByID = createAsyncThunk("getProductByID", async (id) => {
  var res = await axios.get(apiConfig.product.getProductByID + "/" + id);
  return res.data;
});
