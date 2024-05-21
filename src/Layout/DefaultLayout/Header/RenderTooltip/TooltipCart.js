import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { tinhtonggia } from "~/help/tinhtonggia";
import { Int2VND } from "~/utils/Int2VND";

function TooltipCart() {
  var DataCart = useSelector((s) => s.CurrentCartSlice.CurrentCart);
  var CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  var tonggia = tinhtonggia(DataCart);

  return (
    <div
      className="relative w-[398px] h-[392px] bg-white
     rounded-md shadow-xl border py-3 flex flex-col"
    >
      {CurrentUser.has && DataCart.length > 0 && (
        <>
          <div className="danhsach flex-1 w-full overflow-auto scroll-setting">
            {DataCart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <div className="w-full h-[32px]  flex items-center justify-center tracking-wide gap-2">
            <p className="text-[14px]">Tổng tiền tạm tính: </p>
            <span className="text-[15px] text-red-500 font-[500]">
              {Int2VND(tonggia)}
            </span>
          </div>
          {/* Thanh toan */}
          <div className=" w-full h-[45px] left-[auto] flex text-white justify-center text-[17px] tracking-wide">
            <Link
              to={"/cart"}
              className="w-[70%] h-full bg-black rounded-md text-center content-center"
            >
              Tiến hành thanh toán
            </Link>
          </div>
        </>
      )}
      {CurrentUser.has === false && (
        <div className="m-[auto] flex flex-col items-center text-[16px] gap-3">
          Đăng nhập để mua sắm và nhận những ưu đãi!
          <Link to={"/account/login"} className="text-[13px] text-blue-500">
            Đăng nhập ngay
          </Link>
        </div>
      )}
      {DataCart.length <= 0 && (
        <div className="m-[auto] flex flex-col items-center text-[16px] gap-3">
          Bạn chưa có sản phẩm nào trong giỏ hàng!
          <Link to={"/"} className="text-[13px] text-blue-500">
            Chọn hàng để mua!
          </Link>
        </div>
      )}
    </div>
  );
}

export default TooltipCart;
