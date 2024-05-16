import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Newin from "./Newin";
import ProductInfo from "./ProductInfo";
import BtnTuyChon from "./BtnTuyChon";
import BtnXemNhanh from "./BtnXemNhanh";

function ItemProduct({ props, option }) {
  const [isHover, setIsHover] = useState(false);
  var lengthImg = props.srcimg.length;
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  const LinkRef = useRef(null);
  const SpanRef = useRef(null);
  var classNameOptions = `
            absolute right-1/4  rounded-md w-1/2 h-[50px] bg-white flex text-[1rem]
             transition-transform duration-[600ms] ease-in-out overflow-hidden`;

  useEffect(() => {
    var tmp = LinkRef.current.clientHeight;
    // console.log("tmp=", tmp);
    if (SpanRef.current && option) {
      // console.log(tmp);
      SpanRef.current.style.top = `${tmp * 0.8}px`;
    }
  }, []);

  return (
    <div className="ITEMPRODUCT w-full  h-[auto] flex flex-col relative items-end">
      <Newin props={props} />

      {/* -----------------------------------------Product IMG-------------------------------------------- */}
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
      {/* -----------------------------------------Product SPAN-------------------------------------------- */}
      {option && (
        <span
          ref={SpanRef}
          className={`${classNameOptions}
            ${
              isHover
                ? " visible translate-y-0"
                : "translate-y-[100%] invisible"
            }
            `}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <BtnTuyChon />
          <span className="w-[0.5px] h-full bg-gray-100"></span>
          <BtnXemNhanh props={props} />
        </span>
      )}
      {/* --------------------------------ProductInfo------------------------------------------------- */}
      <ProductInfo
        props={props}
        indexColorClick={indexColorClick}
        setindexColorClick={setindexColorClick}
      />
    </div>
  );
}

export default ItemProduct;
