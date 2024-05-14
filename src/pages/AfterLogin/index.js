import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "~/firebase";
import { useState, useEffect } from "react";

function AfterLogin() {
  const [userDetail, setUserDetail] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log("user", user);

      if (user) {
        const docRef = doc(db, "Users", user.uid);
        console.log("docRef", docRef);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("user is not logged in");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/account/login";
      console.log("user is logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-[1.9em]">
      Trang AffterLogin
      {userDetail && (
        <>
          <h3>Welcom {userDetail.firstname}</h3>
          <div className="">
            <p>Email: {userDetail.email}</p>
          </div>
          <button className="bg-blue-300" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default AfterLogin;
