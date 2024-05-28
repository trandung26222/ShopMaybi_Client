import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartPreview } from "~/redux/slices/ElementDomSlice";
import { setCurrentProduct } from "~/redux/slices/CurrentProductSlice";
import { Tooltip } from "antd";
import { IoEyeOutline } from "react-icons/io5";

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
        className="flex-1 hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center "
      >
        <IoEyeOutline size={16} />
      </button>
    </Tooltip>
  );
}

export default BtnXemNhanh;
