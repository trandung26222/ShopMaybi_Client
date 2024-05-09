import React from "react";

function CartItem({ item }) {
  return (
    <div className="cacitem w-full h-[90px] pl-3 py-[8px] flex flex-col items-center relative">
      <div className="noidung w-full h-full flex flex-nowrap gap-2">
        <img src={item.img} alt="" />
        <div className="noidungright flex flex-col justify-evenly tracking-normal">
          <p className="text-[14px]">{item.name}</p>
          <p className="text-[13px] font-[500] text-gray-400">
            {item.describe}
          </p>
          <div className=" text-[14px]  items-center flex gap-2">
            <p className="text-red-500 font-[500]">{item.price}</p>
            <p className="text-black">{`x ${item.quantity}`}</p>
          </div>
        </div>
      </div>
      <span className="absolute bottom-0 separate w-[97%] h-[0.8px] bg-gray-200 "></span>
    </div>
  );
}

export default CartItem;
