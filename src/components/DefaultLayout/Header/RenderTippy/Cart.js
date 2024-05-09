import React from "react";
import CartItem from "./CartItem";
import { CartItemData } from "../Data/CartItemData";

function Cart() {
  return (
    <div className="w-[398px] h-[392px] bg-white rounded-md shadow-xl border py-3 flex flex-col">
      {/* Danh sach */}
      <div className="danhsach flex-1 w-full overflow-auto scroll-setting">
        {CartItemData.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>

      {/* Bottom */}
      <div className="w-full h-[32px]  flex items-center justify-center tracking-wide gap-2">
        <p className="text-[14px]">Tổng tiền tạm tính: </p>
        <span className="text-[15px] text-red-500 font-[500]"> 761,400đ</span>
      </div>
      <div className=" w-full h-[45px] left-[auto] flex text-white justify-center text-[17px] tracking-wide">
        <button className="w-[70%] h-full bg-black rounded-md">
          Tiến hành thanh toán
        </button>
      </div>
    </div>
  );
}

export default Cart;
