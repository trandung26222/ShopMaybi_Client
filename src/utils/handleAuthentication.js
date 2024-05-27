import { auth } from "~/firebase";

export var handleAuthentication = async (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem("uid", user.uid);
    } else {
    }
  });
};
