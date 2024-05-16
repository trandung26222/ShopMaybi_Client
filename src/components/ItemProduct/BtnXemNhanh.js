import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { toggleCartPreview } from "~/redux/slices/ElementDomSlice";
import { setCurrentProduct } from "~/redux/slices/CurrentProductSlice";
import { Tooltip } from "antd";

function BtnXemNhanh({ props }) {
  var dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentProduct(props));
    dispatch(toggleCartPreview());
  };
  return (
    <Tooltip title="Xem nhanh" arrow placement="top">
      <button
        onClick={handleClick}
        className="flex-1 hover:bg-[rgba(0,0,0,0.3)]"
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
    </Tooltip>
  );
}

export default BtnXemNhanh;
