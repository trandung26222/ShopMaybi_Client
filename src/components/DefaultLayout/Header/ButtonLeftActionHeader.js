import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { forwardRef } from "react";

const Btn = forwardRef(({ item }, ref) => {
  return (
    <button
      ref={ref}
      className="flex flex-col text-black items-center cursor-pointer gap-[5px] px-1 py-1 rounded transition-opacity duration-[300ms] ease-in-out hover:opacity-[0.5]"
    >
      {item.icon}
      <p className="whitespace-nowrap text-[14px] font-[400]">{item.p}</p>
    </button>
  );
});

function ButtonLeftActionHeader({ item }) {
  var renderTippy = (p) => (
    <>
      {p === "Đăng nhập" && (
        <div className="w-[95px] h-[80px] bg-white rounded-md shadow-lg border flex flex-col justify-between items-start text-[14px] px-0">
          <button className="bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]">
            Đăng nhập
          </button>
          <button className="bg-white flex items-start px-2 w-full py-[8px] rounded-md hover:bg-[rgba(0,0,0,0.1)]">
            Đăng ký
          </button>
        </div>
      )}
      {p === "Giỏ hàng" && (
        <div className="w-[398px] h-[392px] bg-white rounded-md shadow-xl border py-3 flex flex-col">
          <div className="danhsach flex-1 w-full overflow-auto">
            <div className="cacitem w-full h-[90px] pl-3 py-0 flex flex-col items-center">
              <div className="noidung w-full h-full flex flex-nowrap ">
                <img
                  height="70px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNydxoc8qRfjYUoXbQntD7USQSf1RgAIvYENy52ksLmr5SIIgieIj98eE7TA&s"
                  alt=""
                />
              </div>
              <span className="separate w-[97%] h-[0.8px] bg-gray-200 "></span>
            </div>
            <div className="cacitem w-full h-[90px] pl-3 py-0 flex flex-col items-center">
              <div className="noidung w-full h-full flex flex-nowrap ">
                <img
                  height="70px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNydxoc8qRfjYUoXbQntD7USQSf1RgAIvYENy52ksLmr5SIIgieIj98eE7TA&s"
                  alt=""
                />
              </div>
              <span className="separate w-[97%] h-[0.8px] bg-gray-200 "></span>
            </div>
          </div>
          <div className="w-full h-[32px]  flex items-center justify-center tracking-wide gap-2">
            <p className="text-[14px]">Tổng tiền tạm tính: </p>
            <span className="text-[15px] text-red-500 font-[500]">
              {" "}
              761,400đ
            </span>
          </div>
          <div className=" w-full h-[45px] left-[auto] flex text-white justify-center text-[17px] tracking-wide">
            <button className="w-[70%] h-full bg-black rounded-md">
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <Tippy
      arrow
      interactive
      placement="bottom"
      render={() => renderTippy(item.p)}
      offset={[0, 0]}
      delay={[500, 0]}
    >
      <Btn item={item}></Btn>
    </Tippy>
  );
}

ButtonLeftActionHeader.propTypes = {};

export default ButtonLeftActionHeader;
