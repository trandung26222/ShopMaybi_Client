import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { tinhtonggia } from "~/help/tinhtonggia";

function TooltipCart() {
  var DataCart = useSelector((s) => s.CurrentCartSlice.CurrentCart);
  var tonggia = tinhtonggia(DataCart);

  return (
    <div className="w-[398px] h-[392px] bg-white rounded-md shadow-xl border py-3 flex flex-col">
      {/* Danh sach */}
      <div className="danhsach flex-1 w-full overflow-auto scroll-setting">
        {DataCart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>

      {/* Bottom */}
      <div className="w-full h-[32px]  flex items-center justify-center tracking-wide gap-2">
        <p className="text-[14px]">Tổng tiền tạm tính: </p>
        <span className="text-[15px] text-red-500 font-[500]">
          {tonggia.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>
      <div className=" w-full h-[45px] left-[auto] flex text-white justify-center text-[17px] tracking-wide">
        <Link
          to={"/cart"}
          className="w-[70%] h-full bg-black rounded-md text-center content-center"
        >
          Tiến hành thanh toán
        </Link>
      </div>
    </div>
  );
}

export default TooltipCart;
