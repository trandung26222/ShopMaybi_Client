import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleCartPreview } from "~/redux/slices/ElementDomSlice";

function ContentPreview({ props }) {
  var dispatch = useDispatch();
  const giagoc = parseInt((props.gia * 100) / (100 - props.giamgia));
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 right-0  bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center">
      <div className="w-[60%] h-[80%] bg-white rounded-2xl flex relative">
        <div className="w-1/2 h-full px-[50px] py-[50px] ">
          <div className="w-full h-full border">
            <img
              src={props.srcimg[0]}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <button
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => {
              dispatch(toggleCartPreview());
            }}
          >
            <FontAwesomeIcon icon={faX} className="" />
          </button>

          <p>{props.title}</p>
          <p>Thương hiệu: Maybi | Mã sản phẩm: {props.msp}</p>
          <p className="cssMoney">
            {props.gia.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p>
            {giagoc.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p>-{props.giamgia}%</p>
          <span className=" text-[1.3em] font-[500]  bg-[#bf660e] px-2 py-1 rounded-md text-white">
            NEW-IN
          </span>
          <p>Màu sắc</p>
          <p> Kích thước</p>
          <p>Ưu đãi</p>
          <p>
            Freeship cho đơn hàng từ 499K Giảm 15% cho khách hàng lần đầu mua
            hàng Khách hàng được quyền đổi trong vòng 7 ngày từ lúc nhận hàng
            (Không áp dụng cho hàng khuyến mãi) Và thêm các mã khuyến mãi bên
            dưới
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentPreview;
