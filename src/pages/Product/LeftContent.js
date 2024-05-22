import React from "react";
import { useState } from "react";
import { Image } from "antd";

function LeftContent({ Product }) {
  var [indeximgselect, setindeximgselect] = useState(0);

  return (
    <div className="h-auto w-full flex">
      <div className="flex-col flex w-[92px] gap-1">
        {Product.srcimg.map((item, index) => {
          return (
            <button
              key={index}
              className={` w-full rounded-md overflow-hidden px-[6px] py-[6px]
    ${indeximgselect === index ? "border-[rgba(0,0,0,0.3)] border" : ""}
    `}
              onMouseEnter={() => {
                setindeximgselect(index);
              }}
            >
              <img
                src={Product.srcimg[index]}
                alt={Product.title}
                className="object-contain rounded"
              />
            </button>
          );
        })}
      </div>
      <div className=" h-[500px] w-full flex items-center justify-center">
        <Image
          style={{
            height: "100%",
            objectFit: "contain",
            borderRadius: "10px",
          }}
          src={Product.srcimg[indeximgselect]}
        />
      </div>
    </div>
  );
}

export default LeftContent;
