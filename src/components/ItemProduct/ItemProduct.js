import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Newin from "./Newin";
import ProductInfo from "./ProductInfo";
import BtnTuyChon from "./BtnTuyChon";
import BtnYeuThich from "./BtnYeuThich";
import BtnXemNhanh from "./BtnXemNhanh";
import { useSelector } from "react-redux";

function ItemProduct({ props, option }) {
  const [isHover, setIsHover] = useState(false);
  var lengthImg = props.srcimg.length;
  var currrentW = useSelector((s) => s.responsive.currentWidth);
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  const LinkRef = useRef();
  const SpanRef = useRef();
  var classNameOptions = `
            absolute right-[16%] rounded-md w-2/3 h-[40px] bg-white flex text-[1rem]
             transition-transform duration-[600ms] ease-in-out overflow-hidden `;

  useEffect(() => {
    var afterRender = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (LinkRef.current) {
        var tmp = LinkRef.current.clientHeight;
      }
      if (SpanRef.current && option) {
        SpanRef.current.style.top = `${tmp * 0.82}px`;
      }
    };
    afterRender();
  }, []);

  return (
    <div className="ITEMPRODUCT w-full  h-[auto] flex flex-col relative items-end ">
      <Newin props={props} />

      {/* -----------------------------------------Product IMG-------------------------------------------- */}
      <Link
        ref={LinkRef}
        to={`/product/${props._id}`}
        className="w-full bg-white h-fit shadow-md  overflow-hidden relative rounded-xl "
      >
        <img
          className={`h-full object-contain transition-transform rounded-xl duration-[500ms] transform scale-100 ${
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
          <BtnYeuThich props={props} />
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
