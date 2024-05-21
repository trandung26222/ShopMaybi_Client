import React from "react";
import BreadCrumb from "~/components/BreadCrumb";

function Profile() {
  return (
    <div className="w-full h-auto">
      <BreadCrumb links={["Trang chủ"]} typography={"Thông tin tài khoản"} />
      <div className="bg-lime-50 h-[100px] w-full px-[var(--padding-header)]"></div>
    </div>
  );
}

export default Profile;
