import { auth } from "~/firebase";
import { showMessage, typeMessage } from "~/utils/showMessage";
import { signOut } from "firebase/auth";

export const LogOut = async (dispatch) => {
  signOut(auth)
    .then(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      showMessage(typeMessage.success, "Đăng xuất thành công!");
      dispatch({
        type: "CurrentUserSlice/clearCurrentUser",
      });
      dispatch({
        type: "CartSlice/clearCart",
      });
      window.location.href = "/account/login";
    })
    .catch(() => {
      showMessage(typeMessage.error, "Lỗi đăng xuất!");
    });
};
