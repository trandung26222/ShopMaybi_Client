import React from "react";
import BreadCrumb from "../../components/BreadCrumb";

function Collection() {
  return (
    <div className="w-full h-auto">
      <BreadCrumb links={["Trang chủ", "Danh mục"]} />
    </div>
  );
}

export default Collection;
