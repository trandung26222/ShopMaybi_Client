import { auth } from "~/firebase";
import { getCurrentUser } from "~/redux/CallFireBase/getCurrentUser";
import { fetchCart } from "~/redux/CallFireBase/fetchCart";
import { clearCurrentCart } from "~/redux/slices/CurrentCartSlice";

export var handleAuthentication = async (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(getCurrentUser(user.uid));
      dispatch(fetchCart(user.uid));
      localStorage.setItem("uid", user.uid);
    } else {
      dispatch(clearCurrentCart());
    }
  });
};
