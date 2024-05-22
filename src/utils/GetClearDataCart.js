import {
  getDocs,
  collection,
  where,
  query,
  deleteDoc,
  limit,
} from "firebase/firestore";
import { db } from "~/firebase";

var CartRef = collection(db, "Cart");

export var handleRemoveItemCart = async (id) => {
  var q = query(CartRef, where("productid", "==", id), limit(1));
  var querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docToDelete = querySnapshot.docs[0];
    await deleteDoc(docToDelete.ref);
  } else {
    window.alert("Không tìm thấy tài liệu để xóa");
  }
};
