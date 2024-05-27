import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConfig } from "~/utils/config/apiConfig";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  var res = await axios.get(apiConfig.product.getAllProducts);
  return res.data;
});

export const getProductByID = createAsyncThunk("getProductByID", async (id) => {
  var res = await axios.get(apiConfig.product.getProductByID + "/" + id);
  return res.data;
});
