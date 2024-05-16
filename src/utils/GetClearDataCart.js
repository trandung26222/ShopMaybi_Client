import {
  getDocs,
  collection,
  where,
  query,
  deleteDoc,
  limit,
  getDoc,
} from "firebase/firestore";
import { db } from "~/firebase";
import { setCurrentCart } from "~/redux/slices/CurrentCartSlice";

var CartRef = collection(db, "Cart");

export var GetDataCart = async (dispatch, uid) => {
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

    dispatch(setCurrentCart(tmp1));
  }
};
export var ClearDataCart = async (dispatch) => {
  dispatch(setCurrentCart([]));
};

export var handleRemoveItemCart = async (id) => {
  var q = query(CartRef, where("productid", "==", id), limit(1)); // Giới hạn kết quả trả về cho chỉ một tài liệu đầu tiên
  var querySnapshot = await getDocs(q);

  // Kiểm tra xem có tài liệu nào được tìm thấy không
  if (!querySnapshot.empty) {
    const docToDelete = querySnapshot.docs[0]; // Lấy tài liệu đầu tiên từ kết quả truy vấn
    await deleteDoc(docToDelete.ref); // Xóa tài liệu từ Firestore
  } else {
    window.alert("Không tìm thấy tài liệu để xóa");
  }
};
