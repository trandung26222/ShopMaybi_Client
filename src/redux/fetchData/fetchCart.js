import {
  getDocs,
  collection,
  where,
  query,
  deleteDoc,
  limit,
} from "firebase/firestore";
import { db } from "~/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

var CartRef = collection(db, "Cart");

export const fetchCart = createAsyncThunk("Cart", async (uid) => {
  var q = query(CartRef, where("uid", "==", uid));
  var querySnapshot = await getDocs(q);

  var res = [];
  querySnapshot.forEach((item) => {
    res.push({
      ...item.data(),
    });
  });

  var tmp1 = res;

  var arrid = res.map((i) => {
    return i.productid;
  });
  if (arrid.length > 0) {
    q = query(collection(db, "DataProducts"), where("id", "in", arrid));
    querySnapshot = await getDocs(q);
    res = [];
    querySnapshot.forEach((item) => {
      res.push({
        ...item.data(),
      });
    });

    var tmp2 = res;

    tmp1 = tmp1.map((item1) => ({
      ...item1,
      ...tmp2.find((item2) => item2.id === item1.productid),
    }));

    return tmp1;
  }
  return [];
});
