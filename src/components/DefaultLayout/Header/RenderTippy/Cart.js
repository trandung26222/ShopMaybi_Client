import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  var CartItemData = JSON.parse(localStorage.getItem("CartItemData"));
  var tonggia = parseInt(localStorage.getItem("tonggia"));
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

export default Cart;
