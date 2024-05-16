import React, { useState } from "react";
import { InputNumber } from "antd";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "~/firebase";

function ContentRight({ CurrentProduct }) {
  var CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  const giagoc = parseInt(
    (CurrentProduct.gia * 100) / (100 - CurrentProduct.giamgia)
  );
  var [soluongsanpham, setsoluongsanpham] = useState(1);
  var handleinputnumber = () => {
    setsoluongsanpham((pre) => pre + 1);
  };
  var handlethemgiohang = async () => {
    var data = {
      uid: CurrentUser.uid,
      productid: CurrentProduct.id,
      quantity: soluongsanpham,
      describe: "Xám/S",
    };
    if (CurrentUser.has) {
      await addDoc(collection(db, "Cart"), data);
      window.location.reload();
    } else {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
    }
  };

  return (
    <div className="w-1/2 h-full px-[20px] pr-9 py-5">
      <h1 className="text-[2.7em] font-[600] hover:text-blue-300 cursor-pointer  whitespace-nowrap overflow-hidden text-ellipsis">
        {CurrentProduct.title} Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam, eos.
      </h1>
      <h3 className="text-[1.5em] mt-[7px]">
        Thương hiệu: Maybi | Mã sản phẩm: {CurrentProduct.msp}
      </h3>
      <div className="flex items-center mt-2 gap-3">
        <p className="cssMoney text-[1.5em]">
          {CurrentProduct.gia.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <s className="text-[1.5em]">
          {giagoc.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </s>
        <p className="text-[1.5em]">-{CurrentProduct.giamgia}%</p>
        <span className=" text-[1.3em] font-[500]  bg-[#bf660e] px-2 py-1 rounded-md text-white">
          NEW-IN
        </span>
      </div>

      <p className="text-[1.4em] font-[600] mt-2">Màu sắc:</p>
      <p> Kích thước</p>
      <p>Ưu đãi</p>
      <p>
        Freeship cho đơn hàng từ 499K Giảm 15% cho khách hàng lần đầu mua hàng
        Khách hàng được quyền đổi trong vòng 7 ngày từ lúc nhận hàng (Không áp
        dụng cho hàng khuyến mãi) Và thêm các mã khuyến mãi bên dưới
      </p>
      <InputNumber
        style={{ minWidth: "88px" }}
        size="medium"
        min={1}
        max={20}
        defaultValue={soluongsanpham}
        onChange={handleinputnumber}
      />
      <button
        className="px-[15px] py-[10px] border"
        onClick={handlethemgiohang}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default ContentRight;
