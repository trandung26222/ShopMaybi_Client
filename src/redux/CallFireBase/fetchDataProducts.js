import { db } from "~/firebase";
import { getDocs, collection } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

export var fetchDataProducts = createAsyncThunk(
  "fetchDataProducts",
  async () => {
    const doc = await getDocs(collection(db, "DataProducts"));
    const res = [];
    doc.forEach((item) => {
      res.push({
        ...item.data(),
      });
    });

    const delayPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    await delayPromise;
    return res;
  }
);
