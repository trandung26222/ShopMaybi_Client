import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Newin from "./Newin";
import ProductInfo from "./ProductInfo";
import BtnTuyChon from "./BtnTuyChon";
import BtnXemNhanh from "./BtnXemNhanh";
import { setProduct } from "~/redux/slices/ProductDataSlice";
import { useDispatch, useSelector } from "react-redux";

function ItemProduct({ props, option }) {
  const [isHover, setIsHover] = useState(false);
  var lengthImg = props.srcimg.length;
  var dispatch = useDispatch();
  var currrentW = useSelector((s) => s.responsive.currentWidth);
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  const LinkRef = useRef();
  const SpanRef = useRef();
  var classNameOptions = `
            absolute right-1/4 rounded-md w-1/2 h-[50px] bg-white flex text-[1rem]
             transition-transform duration-[600ms] ease-in-out overflow-hidden `;

  useLayoutEffect(() => {
    var tmp = LinkRef.current.clientHeight;
    if (SpanRef.current && option) {
      // console.log(SpanRef.current);
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
        onClick={() => {
          dispatch(setProduct(props.id));
        }}
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
      {/* -----------------------------------------Product Action-------------------------------------------- */}
      {option && currrentW >= 1200 && (
        <span
          ref={SpanRef}
          className={`${classNameOptions}
            ${
              isHover
                ? " visible translate-y-0"
                : "translate-y-[100%] invisible"
            }`}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <BtnTuyChon props={props} />
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
