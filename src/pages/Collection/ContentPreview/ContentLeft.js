import React, { useState } from "react";

function ContentLeft({ CurrentProduct }) {
  var [currrentImage, setcurrrentImage] = useState(0);
  return (
    <div className="w-1/2 h-full pt-[30px] pb-[30px] flex flex-col bg-gray-50 items-center">
      <div className="w-full h-[80%] px-[60px] pb-[20px] flex items-center justify-center">
        <img
          src={CurrentProduct.srcimg[currrentImage]}
          className="object-contain h-full"
          alt=""
        />
      </div>
      <div className="w-[90%] h-[20%]  flex justify-start">
        {CurrentProduct.srcimg.map((c, i) => {
          return (
            <button
              key={i}
              className={`rounded-lg w-[23%] mr-[10px] h-full border flex justify-center cursor-pointer
          ${i === currrentImage && "border-black"}
        `}
              onClick={() => {
                setcurrrentImage(i);
              }}
            >
              <img src={c} className="h-full object-contain rounded" alt="" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ContentLeft;
