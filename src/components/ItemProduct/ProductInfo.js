import React from "react";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { MappingColors } from "./MappingColor";

function ProductInfo({ props, indexColorClick, setindexColorClick }) {
  const giagoc = parseInt((props.gia * 100) / (100 - props.giamgia));
  return (
    <div className="product-info flex flex-col mt-[15px] items-start pl-[3px] w-full">
      <p className="cursor-auto text-[1.2em] inline-block text-[#9e7a7a] font-[600] tracking-[1.8px] mb-2 leading-3">
        MAYBI
      </p>
      <Link
        to={`/product/${props.id}`}
        className="hover:text-[var(--link-color)] font-bold text-[1.5em] transition-color duration-400 ease-in-out"
      >
        {props.title}
      </Link>
      <p className="cursor-auto block cssMoney text-[1.3em]  my-1">
        {props.gia.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      <div className="flex gap-2 items-center mb-2">
        <p className="text-[#666666] line-through inline-block text-[1.3em] font-[400] ">
          {giagoc.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <p className=" text-[1.3em] text-white font-[400] bg-[#d84144] p-[1px] px-[8px] rounded-[10px] text-center tracking-wider">
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
  );
}

export default ProductInfo;
