import { auth } from "~/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage, typeMessage } from "~/utils/showMessage";
import { statusFetch } from "~/utils/statusFetch";

export const LoginEmailPassword = async (
  email,
  password,
  setStateLogin,
  navigate
) => {
  setStateLogin(statusFetch.LOADING);
  signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showMessage(typeMessage.success, "Đăng nhập thành công!");
      setStateLogin(statusFetch.IDLE);
      navigate("/");
    })
    .catch((err) => {
      setStateLogin(statusFetch.IDLE);
      showMessage(typeMessage.error, "Tài khoản hoặc mật khẩu không đúng!");
    });
};
