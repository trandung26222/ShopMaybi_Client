import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/firebase";
import { showMessage, typeMessage } from "~/utils/showMessage";
import { addProfile } from "~/CallAPI/profile";

export const SignUpEmailPassWord = async (
  username,
  email,
  password,
  dispatch
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(
        addProfile({
          uid: user.uid.toString(),
          username: username,
          email: email,
        })
      );
      showMessage(typeMessage.success, "Bạn đã tạo tài khoản thành công!");
    })
    .catch((error) => {
      showMessage(typeMessage.error, "Lỗi khi tạo tài khoản");
    });
};
