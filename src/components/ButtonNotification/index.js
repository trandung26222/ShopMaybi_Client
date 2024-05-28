import React from "react";
import { IoMdNotifications } from "react-icons/io";

function ButtonNotification() {
  return (
    <div className="fixed bottom-32 left-8 round-button flex items-center justify-center  cursor-pointer ">
      <IoMdNotifications size={30} />
    </div>
  );
}

export default ButtonNotification;
