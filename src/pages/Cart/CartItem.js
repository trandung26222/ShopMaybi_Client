import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { InputNumber } from "antd";
import { handleRemoveItemCart } from "~/utils/GetClearDataCart";
import { useDispatch } from "react-redux";
import { deleteCurrentCart } from "~/redux/slices/CurrentCartSlice";
import { Int2VND } from "~/help/Int2VND";

function CartItem({ islast, item }) {
  var dispatch = useDispatch();
  const onChange = (value) => {
    console.log("changed", value);
  };
  var handleRemoveItem = async (id) => {
    await handleRemoveItemCart(id);
    dispatch(deleteCurrentCart(id));
  };

  return (
    <div
      className={`w-full h-[135px] py-[10px] ${
        !islast ? "border-b-[1px]" : ""
      }`}
    >
      <div className="w-full h-full flex items-center py-2 px-6">
        {/*  */}
        <button
          className="text-[1.6em] text-gray-400 "
          onClick={() => {
            handleRemoveItem(item.id);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {/*  */}
        <img
          className="h-full object-contain ml-[20px] mr-[20px]"
          src={item.srcimg[0]}
          alt=""
        />
        {/* noi dung giua */}
        <div className="flex-1 flex flex-wrap gap-3 font-[600] justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[1.4em] whitespace-nowrap overflow-hidden overflow-ellipsis">
              {item.title}
            </p>
            <p className="text-[1.3em] text-[gray]">
              {item.mau}/{item.size}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[1.4em] font-[600] items-start mr-4">
            <p className="cssMoney">{Int2VND(item.gia * item.quantity)}</p>
            <div className="flex items-center gap-2">
              <p className="line-through">
                {Int2VND(
                  parseInt(
                    ((item.gia * item.quantity) / (100 - item.giamgia)) * 100
                  )
                )}
              </p>
              <p className="px-[5px] py-[2px] bg-[#d84144] rounded-xl text-white text-[12px]">
                -{item.giamgia}%
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <InputNumber
          style={{ minWidth: "88px" }}
          size="medium"
          min={1}
          max={20}
          defaultValue={item.quantity}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default CartItem;
