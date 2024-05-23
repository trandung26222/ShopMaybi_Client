import { db } from "~/firebase";
import { doc, getDoc } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

export var getCurrentUser = createAsyncThunk("getCurrentUser", async (uid) => {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    var tmp = docSnap.data();
    if (docSnap.data().ngaysinh) {
      const timestamp = docSnap.data().ngaysinh;
      const milliseconds =
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
      tmp.ngaysinh = milliseconds;
    }
    return tmp;
  } else {
    return null;
  }
});
