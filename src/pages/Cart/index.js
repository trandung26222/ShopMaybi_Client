import React from "react";
import { styled } from "@mui/material/styles";
import BreadCrumb from "~/components/BreadCrumb";
import { LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Grid from "@mui/material/Grid";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { tinhtonggia } from "~/help/tinhtonggia";
import { tinhtongquantity } from "~/help/tinhtongquantity";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "90%",
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#820813" : "#000000",
  },
}));

function Cart() {
  var DataCart = useSelector((s) => s.CurrentCartSlice.CurrentCart);

  var MoneyGift = 499000;

  var tonggia = tinhtonggia(DataCart);
  var soluongsanpham = tinhtongquantity(DataCart);

  // tonggia = 300000;
  var tiencanmuathem = MoneyGift - tonggia;
  var phantramsotien =
    (tonggia / MoneyGift) * 100 > 100 ? 100 : (tonggia / MoneyGift) * 100;

  return (
    <div className="w-full h-auto">
      <BreadCrumb
        links={["Trang chủ"]}
        typography={`Giỏ hàng (${soluongsanpham})`}
      />
      <div className="w-full px-[var(--padding-header)]">
        <h2 className="text-[2.7em] my-[30px] mb-[10px]">Giỏ hàng</h2>
        <span className="w-[92%] text-[1.4em] cssMoney flex justify-end my-[4px]">
          {MoneyGift.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>

        <div className="flex w-full items-center my-[20px] relative">
          <BorderLinearProgress
            variant="determinate"
            value={Math.floor(phantramsotien)}
          />
          <button
            className={`text-center content-center w-[30px] h-[30px] rounded-[50%] absolute right-[8%]  overflow-hidden ${
              phantramsotien === 100 ? "bg-[#820813] text-white" : "bg-gray-200"
            }`}
          >
            <CardGiftcardIcon sx={{ fontSize: 17 }} />
          </button>
        </div>

        {phantramsotien === 100 ? (
          <div className="flex justify-center mb-[20px]  w-[90%] ">
            <div className="text-[1.4em] font-[600] flex items-center">
              <p>Chúc mừng bạn đã đủ điều kiện nhận quà. Nhấp vào biểu tượng</p>
              <span
                className={`flex justify-center items-center mx-[3px] w-[26px] h-[26px] rounded-[50%]  overflow-hidden bg-[#820813] text-white `}
              >
                <CardGiftcardIcon sx={{ fontSize: 15 }} />
              </span>
              <p> để thêm quà tặng vào giỏ hàng.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-end mb-[20px] gap-[0.3em] w-[90%] justify-center">
            <p className="text-[1.3em]">Mua thêm</p>
            <span className="cssMoney text-[1.4em]">
              {tiencanmuathem.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <p className="text-[1.3em]">để nhận quà!</p>
          </div>
        )}

        <Grid container spacing={2}>
          <Grid item xl={9} xs={12}>
            <div className={`w-full`}>
              {DataCart &&
                DataCart.map((c) => {
                  return (
                    <CartItem
                      key={c.id}
                      islast={c.id === DataCart.length - 1 ? true : false}
                      item={c}
                    />
                  );
                })}
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="bg-[rgba(0,0,0,0.1)] rounded-md h-[220px] w-full px-3 pt-6">
              <div className="w-full flex justify-between text-[1.6em]">
                <p className="font-[700]">TỔNG CỘNG</p>
                <p className="cssMoney">
                  {tonggia.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
              <div className="my-5">
                <button className="py-[10px] w-full bg-black text-white rounded-md text-[1.4em]">
                  Thanh toán ngay để nhận ưu đãi
                </button>
              </div>
              <a href="/collections/all" className="">
                <img
                  src="//theme.hstatic.net/1000341902/1001140246/14/footer_trustbadge.png?v=763"
                  alt="Phương thức thanh toán"
                  className="w-full object-contain"
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Cart;
