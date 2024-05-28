import React from "react";
import { CiHeart } from "react-icons/ci";
import { Tooltip } from "antd";

function BtnYeuThich() {
  return (
    <Tooltip title="Thêm vào yêu thích" arrow placement="top">
      <button className="flex-1 hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
        <CiHeart size={16} />
      </button>
    </Tooltip>
  );
}

export default BtnYeuThich;
