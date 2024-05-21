import React, { useState } from "react";
import { InputNumber } from "antd";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "~/firebase";
import ColorItem from "../ItemProduct/ColorItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "antd/es/checkbox/Checkbox";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { showMessage } from "~/utils/showMessage";
import { typeMessage } from "~/utils/showMessage";
import { Int2VND } from "~/utils/Int2VND";

const category = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "XXL", value: "XXL" },
];

function ContentRight({ CurrentProduct }) {
  const [indexColorClick, setindexColorClick] = useState(0);
  const [size, setSize] = useState("");

  var CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  const giagoc = parseInt(
    (CurrentProduct.gia * 100) / (100 - CurrentProduct.giamgia)
  );
  function handleChange(e) {
    setSize(e.target.value);
  }
  var [soluongsanpham, setsoluongsanpham] = useState(1);
  var handleinputnumber = () => {
    setsoluongsanpham((pre) => pre + 1);
  };
  var handlethemgiohang = async () => {
    var data = {
      uid: CurrentUser.uid,
      productid: CurrentProduct.id,
      quantity: soluongsanpham,
      size: size,
      mau: CurrentProduct.color[indexColorClick],
    };
    if (CurrentUser.has) {
      await addDoc(collection(db, "Cart"), data);
      showMessage(
        typeMessage.success,
        "Thêm sản phẩm vào giỏ hàng thành công!"
      );
      window.location.reload();
    } else {
      showMessage(
        typeMessage.warning,
        "Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!"
      );
    }
  };

  return (
    <div className="w-1/2 h-full px-[20px] pr-9 py-5">
      <h1 className="text-[2.7em] font-[600] text-blue-300 hover:text-black cursor-pointer  whitespace-nowrap overflow-hidden text-ellipsis">
        {CurrentProduct.title} Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam, eos.
      </h1>
      <h3 className="text-[1.5em] mt-[7px]">
        Thương hiệu: Maybi | Mã sản phẩm: {CurrentProduct.msp}
      </h3>
      <div className="flex items-center mt-2 gap-3">
        <p className="cssMoney text-[1.5em]">{Int2VND(CurrentProduct.gia)}</p>
        <s className="text-[1.5em]">{Int2VND(giagoc)}</s>
        <p className="text-[1.5em]">-{CurrentProduct.giamgia}%</p>

        {CurrentProduct.newin && (
          <span className=" text-[1.3em] font-[500]  bg-[#bf660e] px-2 py-1 rounded-md text-white">
            NEW-IN
          </span>
        )}
      </div>

      <p className="text-[1.4em] font-[600] mt-2 mb-2">Màu sắc:</p>
      <ColorItem
        props={CurrentProduct}
        indexColorClick={indexColorClick}
        setindexColorClick={setindexColorClick}
      />

      <p className="text-[1.4em] font-[600] mt-2 mb-2"> Kích thước:</p>
      <div className="flex">
        {category.map((item, i) => {
          return (
            <Checkbox
              key={i}
              onChange={handleChange}
              checked={item.value === size}
              value={item.value}
            >
              {item.value}
            </Checkbox>
          );
        })}
      </div>

      <p className="my-3 text-[14px]">
        <FontAwesomeIcon className="mr-2 text-red-400" icon={faGift} />
        Ưu đãi
      </p>
      <ul className="list-disc list-outside text-[1.4em] ml-4">
        <li>Freeship cho đơn hàng từ 499K</li>
        <li>Giảm 15% cho khách hàng lần đầu mua hàng</li>
        <li>
          Khách hàng được quyền đổi trong vòng 7 ngày từ lúc nhận hàng (Không áp
          dụng cho hàng khuyến mãi)
        </li>
        <li>Và thêm các mã khuyến mãi bên dưới</li>
      </ul>

      <div className="flex gap-3 mt-3">
        <InputNumber
          style={{ minWidth: "88px" }}
          size="medium"
          min={1}
          max={20}
          defaultValue={soluongsanpham}
          onChange={handleinputnumber}
        />
        <button
          className="px-[15px] py-[10px] border rounded-md text-[1.1em]"
          onClick={handlethemgiohang}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ContentRight;
