import React from "react";

function Item({ menuItem }) {
  return (
    <div
      className="my-3 flex-1 p-[10px] hover:scale-[1.05] transition-transform 
    duration-700 ease-in-out "
    >
      <a href={menuItem.link} className="w-full">
        <img src={menuItem.imgsrc} alt="" />
        <div className="mt-[9px] flex flex-col items-center w-full">
          <div className="text-center text-[1.6em] font-[500] overflow-hidden text-ellipsis ">
            {menuItem.ssname}
          </div>
          <span className="text-[1.3em] font-[500] text-[#888]">
            {menuItem.ssnumber}
          </span>
        </div>
      </a>
    </div>
  );
}

export default Item;
