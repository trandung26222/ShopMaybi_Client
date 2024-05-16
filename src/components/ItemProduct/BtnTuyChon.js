import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";

function BtnTuyChon() {
  return (
    <Tooltip title="Tùy chọn" arrow placement="top">
      <button className="flex-1 hover:bg-[rgba(0,0,0,0.3)]">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </Tooltip>
  );
}

export default BtnTuyChon;
