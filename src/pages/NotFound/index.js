import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="w-full h-fit  flex items-center justify-center my-[40px]">
      <div className="flex flex-col items-center">
        <img
          src="https://theme.hstatic.net/1000341902/1001140246/14/404.png?v=795"
          alt=""
        />
        <h1 className="text-[2.6em] mb-2">TRANG KHÔNG ĐƯỢC TÌM THẤY</h1>
        <p className="text-center text-[1.5em] text-[#727272] leading-7">
          Thật tiếc! Trang của bạn yêu cầu không tồn tại.
          <br />
          Vui lòng thử với một trang khác hoặc liên hệ để được hỗ trợ nhé!
        </p>

        <Link
          to={"/"}
          className="mt-5 px-5 py-3 border rounded-md hover:bg-[rgba(0,0,0,0.05)]"
        >
          <p className="text-[#727272] text-[14px]">Về trang chủ</p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
