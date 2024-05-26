import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "~/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

var querySnapshot;

export const fetchCart = createAsyncThunk("Cart", async (uid) => {
  //  tìm trong bảng Cart theo uid
  querySnapshot = await getDocs(
    query(collection(db, "Cart"), where("uid", "==", uid))
  );

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

  // lấy tất cả id của product

  // nếu số Item trong Cart > 0 thì mới tìm trong bảng DataProducts có id mà đã lấy
  if (arrid.length > 0) {
    querySnapshot = await getDocs(
      query(collection(db, "DataProducts"), where("id", "in", arrid))
    );

    res = [];
    querySnapshot.forEach((item) => {
      res.push({
        ...item.data(),
      });
    });

    var tmp2 = res;

    tmp1 = tmp1.map((item1) =>
      _.merge({}, item1, _.find(tmp2, { id: item1.productid }))
    );

    return tmp1;
  }
  return [];
});
