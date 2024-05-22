import { db } from "~/firebase";
import { getDocs, collection } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

export var fetchDataProducts = createAsyncThunk("DataProducts", async () => {
  const doc = await getDocs(collection(db, "DataProducts"));
  const res = [];
  doc.forEach((item) => {
    res.push({
      ...item.data(),
    });
  });
  return res;
});
