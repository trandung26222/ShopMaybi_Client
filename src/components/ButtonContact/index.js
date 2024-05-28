import React from "react";
import { BiMessageDetail } from "react-icons/bi";

function ButtonContact() {
  return (
    <div className="fixed bottom-32 right-8 round-button flex flex-col gap-1 items-center justify-center icon-shake cursor-pointer ">
      <BiMessageDetail size={20} />
      <p className="text-[8px]">Liên hệ</p>
    </div>
  );
}

export default ButtonContact;
