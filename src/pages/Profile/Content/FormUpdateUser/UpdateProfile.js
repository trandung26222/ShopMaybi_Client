import { updateProfile } from "~/CallAPI/profile";
import { showMessage, typeMessage } from "~/utils/showMessage";

export const UpdateProfile = (dispatch, data) => {
  data.ngaysinh = data.ngaysinh.$d;

  var params = {
    uid: localStorage.getItem("uid").toString(),
    username: data.username,
    phonenumber: data.phonenumber,
    avatar:
      "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    gioitinh: data.gioitinh,
    ngaysinh: data.ngaysinh,
  };
  console.log(params);
  dispatch(updateProfile(params));
  showMessage(typeMessage.success, "Profile updated!");
};
