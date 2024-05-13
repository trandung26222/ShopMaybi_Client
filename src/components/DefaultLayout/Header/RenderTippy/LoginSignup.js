import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../../firebase";

import { useSelector } from "react-redux";

function LoginSignup() {
  var classnameItem =
    "bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]";
  var classnameContain =
    "w-[95px] h-fit bg-white rounded-md shadow-lg border flex flex-col justify-between items-start text-[14px] px-0";

  const CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  console.log("CurrentUser", CurrentUser);

  // =============================================================================

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/account/login";
    } catch (error) {
      console.log(error.message);
    }
  };

  // =============================================================================
  return (
    <div className={classnameContain}>
      {CurrentUser === false ? (
        <>
          <Link to={"/account/login"} className={`${classnameItem} `}>
            Đăng nhập
          </Link>
          <Link to={"/account/signup"} className={`${classnameItem} `}>
            Đăng ký
          </Link>
        </>
      ) : (
        <>
          <button className={classnameItem}>Tài khoản</button>
          <button onClick={handleLogout} className={`${classnameItem} `}>
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
}

export default LoginSignup;
