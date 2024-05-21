import React from "react";
import FormUpdateUser from "./FormUpdateUser";

function Content() {
  return (
    <div className="w-full h-[500px] border rounded-lg px-[30px] pt-[20px] flex flex-col">
      <h3 className="text-[2.0em] font-[700] mb-2">Hồ Sơ Của Tôi</h3>
      <p className="text-[1.3em]">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <span className="w-full h-[0.6px] bg-[rgba(0,0,0,0.1)] my-[20px]"></span>
      <FormUpdateUser />
    </div>
  );
}

export default Content;
