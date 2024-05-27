import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

function BtnTuyChon({ props }) {
  return (
    <Tooltip title="Tùy chọn" arrow placement="top">
      <Link
        to={`/product/${props._id}`}
        className="flex-1 flex items-center justify-center hover:bg-[rgba(0,0,0,0.3)]"
        onClick={() => {
          console.log("id", props._id);
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} className="text-[1em]" />
      </Link>
    </Tooltip>
  );
}

export default BtnTuyChon;
