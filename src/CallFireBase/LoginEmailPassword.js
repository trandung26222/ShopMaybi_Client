import { auth } from "~/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage, typeMessage } from "~/utils/showMessage";
import { statusFetch } from "~/utils/statusFetch";
import { getCurrentUser } from "~/CallAPI/profile";
import { getAuth } from "firebase/auth";
import { getCart } from "~/CallAPI/cart";

export const LoginEmailPassword = async (
  email,
  password,
  setStateLogin,

  dispatch
) => {
  setStateLogin(statusFetch.LOADING);
  signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      showMessage(typeMessage.success, "Đăng nhập thành công!");
      setStateLogin(statusFetch.IDLE);
    })
    .then(() => {
      const auth = getAuth();
      const user = auth.currentUser;
      localStorage.setItem("uid", user.uid);
      dispatch(getCurrentUser(user.uid)).then(() => {
        dispatch(getCart(localStorage.getItem("_id"))).then(() => {
          window.location.href = "/";
        });
      });
    })
    .catch((err) => {
      setStateLogin(statusFetch.IDLE);
      showMessage(typeMessage.error, "Tài khoản hoặc mật khẩu không đúng!");
    });
};
