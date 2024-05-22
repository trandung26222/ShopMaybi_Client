import { auth } from "~/firebase";
import { updateProfile } from "firebase/auth";

export const UpdateProfile = (data) => {
  updateProfile(auth.currentUser, {
    displayName: data.username,
  })
    .then(() => {
      window.alert("Updated profile");
    })
    .catch((error) => {
      window.alert("Error updating profile");
    });
};
