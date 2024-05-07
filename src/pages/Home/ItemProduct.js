import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemProduct({ props }) {
  const [isHover, setIsHover] = useState(false);
  const numericString = props.gia.replace(/,|₫/g, "");
  const price = parseInt(numericString);

  const giagoc = parseInt(price / (1 - props.giamgia / 100));
  const formattedPrice = giagoc
    .toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })
    .replace(".", ",");
  console.log(formattedPrice);

  return (
    <Link className="w-full  h-[auto] flex flex-col ">
      {/* product img */}
      <div className="bg-white w-full h-[324px] shadow-slate-200 shadow overflow-hidden ">
        <img
          className="w-full h-full transition-transform duration-[500ms] transform scale-100 hover:scale-95"
          src={isHover ? props.srcimg[1] : props.srcimg[0]}
          alt=""
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        />
      </div>
      {/* product info */}
      <div className="product-info flex flex-col mt-[15px] items-start pl-[3px]">
        <p className="cursor-auto text-[12px] inline-block text-[#9e7a7a] font-[600] tracking-[1.8px] mb-2 leading-3">
          MAYBI
        </p>
        <Link className="hover:text-[var(--link-color)] font-bold text-[15px] transition-color duration-400 ease-in-out">
          {props.title}
        </Link>
        <p className="cursor-auto block text-[#DF0000] font-bold mb-1">
          {props.gia}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-[#666666] line-through inline-block text-[13px] font-[400] ">
            {formattedPrice}
          </p>
          <p className=" text-[13px] text-white font-[400] bg-[#d84144] p-[1px] px-[8px] rounded-[10px] text-center tracking-wider">
            -{props.giamgia}%
          </p>
        </div>
      </div>
    </Link>
  );
}

/*
    font-size: 12px;
    text-transform: uppercase;
    display: inline-block;
    line-height: initial;
*/

ItemProduct.propTypes = {};

export default ItemProduct;
