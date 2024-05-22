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

export var RemoveItemCart = createAsyncThunk("RemoveItemCart", async (id) => {
  var q = query(CartRef, where("productid", "==", id), limit(1));
  var querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docToDelete = querySnapshot.docs[0];
    await deleteDoc(docToDelete.ref);
    return "Đã xóa sản phẩm!";
  } else {
    return "Không tìm thấy sản phẩm trong giỏ hàng!";
  }
});
