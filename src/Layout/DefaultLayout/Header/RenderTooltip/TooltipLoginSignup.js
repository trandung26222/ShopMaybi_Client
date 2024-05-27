import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogOut } from "~/CallFireBase/LogOut";

function TooltipLoginSignup() {
  var dispatch = useDispatch();
  var classnameItem =
    "bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]";
  var classnameContain =
    "w-[95px] h-fit bg-white rounded-md shadow-lg border flex flex-col justify-between items-start text-[14px] px-0";

  const CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser.has);

  // =============================================================================

  const handleLogout = async () => {
    LogOut(dispatch);
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
          <Link to={"/account/profile"} className={classnameItem}>
            Tài khoản
          </Link>
          <button onClick={handleLogout} className={`${classnameItem} `}>
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
}

export default TooltipLoginSignup;
