import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { Popover, Flex } from "antd";
import { callus, email, vitri, zalo } from "../Icon/Icon";

function ButtonContact() {
  var content = () => {
    var arr = [
      {
        ic: callus,
        p: "Gọi ngay cho chúng tôi",
      },
      {
        ic: zalo,
        p: "Liên hệ qua Zalo",
      },
      {
        ic: vitri,
        p: "Thông tin cửa hàng",
      },
      {
        ic: email,
        p: "Email",
      },
    ];
    return (
      <Flex
        vertical
        className="absolute right-0 bottom-0 w-[271px] h-[237px] bg-white rounded-lg px-5 border shadow-lg"
      >
        {arr.map((item) => {
          return (
            <Flex
              justify="space-between"
              align="center"
              className="flex-1 relative"
            >
              <>{item.ic()}</>
              <p className="text-[16px] absolute left-14 ">{item.p}</p>
            </Flex>
          );
        })}
      </Flex>
    );
  };
  return (
    <Popover arrow={false} content={content} trigger="click">
      <div className="fixed bottom-32 right-8 round-button flex flex-col gap-1 items-center justify-center icon-shake cursor-pointer ">
        <BiMessageDetail size={20} />
        <p className="text-[8px]">Liên hệ</p>
      </div>
    </Popover>
  );
}

export default ButtonContact;
