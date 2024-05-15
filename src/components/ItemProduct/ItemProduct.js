import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Tooltip } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { MappingColors } from "./MappingColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Popover } from "antd";

function ItemProduct({ props, option }) {
  const [isHover, setIsHover] = useState(false);
  var lengthImg = props.srcimg.length;
  const [indexColorClick, setindexColorClick] = useState(0);
  const [indexColorHover, setindexColorHover] = useState(null);
  const giagoc = parseInt((props.gia * 100) / (100 - props.giamgia));
  const LinkRef = useRef();
  useEffect(() => {
    var tmp = LinkRef.current.clientHeight;
    SpanRef.current.style.top = `${tmp * 0.8}px`;
  }, []);
  const SpanRef = useRef();

  return (
    <div className="ITEMPRODUCT w-full  h-[auto] flex flex-col relative items-end">
      {props.newin && (
        <span className="z-[1] absolute left-0 text-[1.3em] font-[500]  bg-[#bf660e] px-2 py-1 rounded-md text-white">
          NEW-IN
        </span>
      )}
      {/* product img */}
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
      {option && (
        <span
          ref={SpanRef}
          className={`absolute right-1/4  rounded-md w-1/2 h-[50px] bg-white flex text-[1rem]
            translate-y-[100%] transition-transform duration-[400ms] ease-in-out overflow-hidden
            ${isHover ? " visible translate-y-[0%]" : "invisible"}`}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <BtnAction1 />

          <span className="w-[0.5px] h-full bg-gray-100"></span>

          <BtnAction2 />
        </span>
      )}

      {/* product info */}
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
    </div>
  );
}

const BtnAction1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Tooltip title="Tùy chọn" arrow placement="top">
      <button
        onClick={() => setOpen(true)}
        className="flex-1 hover:bg-[rgba(0,0,0,0.3)]"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </Tooltip>
  );
};

const BtnAction2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<NoidungPopUp2 setOpen={setOpen} />}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      arrow={false}
    >
      <Tooltip title="Xem nhanh" arrow placement="top">
        <button className="flex-1 hover:bg-[rgba(0,0,0,0.3)]">
          <FontAwesomeIcon icon={faEye} />
        </button>
      </Tooltip>
    </Popover>
  );
};

const NoidungPopUp2 = ({ setOpen }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 right-0  bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center">
      <button
        className="w-[60%] h-[80%] bg-white rounded-2xl"
        onClick={() => setOpen(false)}
      >
        Close
      </button>
    </div>
  );
};

export default ItemProduct;
