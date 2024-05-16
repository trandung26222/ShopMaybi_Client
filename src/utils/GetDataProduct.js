import { getDocs, collection } from "firebase/firestore";
import { db } from "~/firebase";
import { setProductData } from "~/redux/slices/ProductDataSlice";

export var GetDataProduct = async (dispatch) => {
  const doc = await getDocs(collection(db, "DataProducts"));

  const res = [];

  doc.forEach((item) => {
    res.push({
      ...item.data(),
    });
  });
  dispatch(setProductData(res));
};
