import { auth } from "~/firebase";
import { fetchCart } from "~/redux/CallFireBase/fetchCart";
import { clearCurrentCart } from "~/redux/slices/CurrentCartSlice";
import { getCurrentUser } from "~/CallAPI/profile";

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
