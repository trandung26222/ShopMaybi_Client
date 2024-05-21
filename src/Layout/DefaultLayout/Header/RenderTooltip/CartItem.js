import React from "react";
import { Int2VND } from "~/utils/Int2VND";

function CartItem({ item }) {
  return (
    <div className="cacitem w-full h-[90px] pl-3 py-[8px] flex flex-col items-center relative">
      <div className="noidung w-full h-full flex flex-nowrap gap-2">
        <a className="h-full hover:scale-95" href="/">
          <img src={item.srcimg[0]} className="object-contain h-full" alt="" />
        </a>
        {/* object-contain */}
        <div className="noidungright flex flex-col justify-evenly tracking-normal">
          <a href="/" className="text-[14px] ">
            {item.title}
          </a>
          <p className="text-[13px] font-[500] text-gray-400">
            {item.mau}/{item.size}
          </p>
          <div className=" text-[14px]  items-center flex gap-2">
            <p className="text-red-500 font-[500]">
              {Int2VND(parseInt(item.gia))}
            </p>
            <p className="text-black">{`x ${item.quantity}`}</p>
          </div>
        </div>
      </div>
      <span className="absolute bottom-0 separate w-[97%] h-[0.8px] bg-gray-200 "></span>
    </div>
  );
}

export default CartItem;
