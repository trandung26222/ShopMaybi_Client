import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductImg({ props, LinkRef }) {
  const [isHover, setIsHover] = useState(false);
  var lengthImg = props.srcimg.length;
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  return (
    <Link
      ref={LinkRef}
      to={`/product/${props.id}`}
      className="w-full bg-white h-fit shadow-slate-200 shadow overflow-hidden relative"
    >
      <img
        className={`h-full object-contain transition-transform duration-[500ms] transform scale-100 ${
          isHover && "scale-95"
        }`}
        src={
          isHover
            ? props.srcimg[indexColorHover]
            : props.srcimg[indexColorClick]
        }
        alt=""
        onMouseEnter={() => {
          setIsHover(true);
          setindexColorHover((pre) => (pre + 1) % lengthImg);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      />
    </Link>
  );
}

export default ProductImg;
