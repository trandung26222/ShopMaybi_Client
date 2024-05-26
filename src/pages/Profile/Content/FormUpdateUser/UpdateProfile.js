import { auth } from "~/firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase";

export const UpdateProfile = (data) => {
  updateProfile(auth.currentUser, {
    displayName: data.username,
  })
    .then(async () => {
      // var uid = localStorage.getItem("uid").toString();
      // await setDoc(doc(db, "Users", uid), {
      //   username: data.username,
      //   phonenumber: data.phonenumber,
      //   avatar:
      //     "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   gioitinh: data.gioitinh,
      //   ngaysinh: data.ngaysinh,
      // });
      var params = {
        uid: localStorage.getItem("uid").toString(),
        username: data.username,
        phonenumber: data.phonenumber,
        avatar:
          "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        gioitinh: data.gioitinh,
        ngaysinh: data.ngaysinh,
      };
      var kq = updateProfile(params);
      console.log(kq);
    })
    .then(() => {
      window.alert("Updated profile");
    })
    .catch((error) => {
      window.alert("Error updating profile");
    });
};
