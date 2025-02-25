import React from "react";
import { Link } from "react-router-dom";
import ColorItem from "./ColorItem";
import { Int2VND } from "~/help/Int2VND";

function ProductInfo({ props, indexColorClick, setindexColorClick }) {
  const giagoc = parseInt((props.gia * 100) / (100 - props.giamgia));
  return (
    <div className="product-info flex flex-col mt-[15px] items-start pl-[3px] w-full">
      <p className="cursor-auto text-[1.2em] inline-block text-[#9e7a7a] font-[600] tracking-[1.8px] mb-2 leading-3">
        MAYBI
      </p>
      <Link
        to={`/product/${props._id}`}
        className="text-overflow-2-lines hover:text-[var(--link-color)] font-bold text-[1.5em] transition-color duration-400 ease-in-out"
        onClick={() => {}}
      >
        {props.title}
      </Link>
      <p className="cursor-auto block cssMoney text-[1.3em]  my-1">
        {Int2VND(props.gia)}
      </p>
      <div className="flex gap-2 items-center mb-2">
        <p className="text-[#666666] line-through inline-block text-[1.3em] font-[400] ">
          {Int2VND(giagoc)}
        </p>
        <p className=" text-[1.3em] text-white font-[400] bg-[#d84144] p-[1px] px-[8px] rounded-[10px] text-center tracking-wider">
          -{props.giamgia}%
        </p>
      </div>
      <ColorItem
        props={props}
        setindexColorClick={setindexColorClick}
        indexColorClick={indexColorClick}
      />
    </div>
  );
}

export default ProductInfo;
