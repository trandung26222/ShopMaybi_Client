import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { MappingColors } from "./MappingColor";

function ItemProduct({ props }) {
  const [isHover, setIsHover] = useState(false);
  var lengthColor = props.color.length;
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  const numericString = props.gia.replace(/,|₫/g, "");
  const price = parseInt(numericString);
  const giagoc = parseInt(price / (1 - props.giamgia / 100));
  const formattedPrice = giagoc
    .toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })
    .replace(".", ",");

  return (
    <div className="w-full  h-[auto] flex flex-col relative">
      {/* product img */}
      {props.newin && (
        <span className="absolute z-10 text-[13px] font-[500] left-3 bg-[#bf660e] px-2 py-1 rounded-md text-white">
          NEW-IN
        </span>
      )}
      <Link className="bg-white w-full h-[324px] shadow-slate-200 shadow overflow-hidden ">
        <img
          className=" w-full h-full transition-transform duration-[500ms] transform scale-100 hover:scale-95 "
          src={
            isHover
              ? props.srcimg[indexColorHover]
              : props.srcimg[indexColorClick]
          }
          // src={props.srcimg[0]}
          alt=""
          onMouseEnter={() => {
            setIsHover(true);
            setindexColorHover((pre) => (pre + 1) % lengthColor);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        />
      </Link>
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
        <div className="flex gap-2 items-center mb-2">
          <p className="text-[#666666] line-through inline-block text-[13px] font-[400] ">
            {formattedPrice}
          </p>
          <p className=" text-[13px] text-white font-[400] bg-[#d84144] p-[1px] px-[8px] rounded-[10px] text-center tracking-wider">
            -{props.giamgia}%
          </p>
        </div>
        <div className="flex gap-2 items-center">
          {props.color.map((item, index) => {
            return (
              <button
                key={index}
                className="cursor-pointer relative inline-flex"
                onClick={() => {
                  setindexColorClick(index);
                }}
              >
                <Tooltip
                  placement="top"
                  arrow
                  title={<div>{props.color[index]}</div>}
                >
                  <div
                    className={`absolute ${
                      indexColorClick === index ? "opacity-100" : "opacity-0"
                    } rounded-full border border-gray-700 w-full h-full transition-opacity duration-300 hover:opacity-100`}
                  ></div>
                </Tooltip>

                <Brightness1Icon
                  sx={{
                    color: MappingColors[props.color[index]],
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ItemProduct.propTypes = {};

export default ItemProduct;
