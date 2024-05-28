import React from "react";
import { IoCartOutline } from "react-icons/io5";

import { Tooltip } from "antd";
import { Link } from "react-router-dom";

function BtnTuyChon({ props }) {
  return (
    <Tooltip title="Tùy chọn" arrow placement="top">
      <Link
        to={`/product/${props._id}`}
        className="flex-1 flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)]"
        onClick={() => {
          console.log("id", props._id);
        }}
      >
        <IoCartOutline size={16} />
      </Link>
    </Tooltip>
  );
}

export default BtnTuyChon;
