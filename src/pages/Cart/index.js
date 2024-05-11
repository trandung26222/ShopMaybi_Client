import React from "react";
import { styled } from "@mui/material/styles";
import { CartItemData } from "../../components/Data/CartItemData";
import BreadCrumb from "../../components/BreadCrumb";
import { LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

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

// #820813

function Cart() {
  var MoneyGift = 499000;
  var tongtien = 0;
  var sosanpham = 0;
  var tiencanmuathem = 0;

  CartItemData.forEach((c) => {
    const giaNumber = parseFloat(c.price.replace(/[^\d.-]/g, ""));
    tongtien += giaNumber * c.quantity;
    sosanpham += c.quantity;
  });
  tongtien = 300000;

  tiencanmuathem = MoneyGift - tongtien;
  var phantramsotien =
    (tongtien / MoneyGift) * 100 > 100 ? 100 : (tongtien / MoneyGift) * 100;
  console.log(phantramsotien);

  return (
    <div className="w-full h-auto">
      <BreadCrumb
        links={["Trang chủ"]}
        typography={`Giỏ hàng (${sosanpham})`}
      />
      <div className="w-full px-[var(--padding-header)]">
        <h2 className="text-[2.7em] my-[30px] mb-[15px]">Giỏ hàng</h2>
        <span className="w-[92%]  cssMoney flex justify-end my-[4px]">
          {MoneyGift.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <div className="flex w-full items-center">
          <BorderLinearProgress
            variant="determinate"
            value={Math.floor(phantramsotien)}
          />
          <span className="text-center content-center w-[30px] h-[30px] rounded-[50%] overflow-hidden bg-[rgba(0,0,0,0.2)]">
            <CardGiftcardIcon sx={{ fontSize: 17 }} />
          </span>
        </div>

        {phantramsotien === 100 ? (
          <div className="">nhan qua</div>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-[1.6em]">Mua thêm</p>
            <span className="cssMoney ">
              {tiencanmuathem.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
