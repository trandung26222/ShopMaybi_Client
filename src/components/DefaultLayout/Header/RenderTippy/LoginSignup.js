import React from "react";
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <div className="w-[95px] h-[80px] bg-white rounded-md shadow-lg border flex flex-col justify-between items-start text-[14px] px-0">
      <Link
        to={"/account/login"}
        className="bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]"
      >
        Đăng nhập
      </Link>
      <Link
        to={"/account/signup"}
        className="bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]"
      >
        Đăng ký
      </Link>
    </div>
  );
}

export default LoginSignup;
