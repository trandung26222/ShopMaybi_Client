import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "~/components/BreadCrumb";
import { useState } from "react";

function Product(props) {
  var Product = JSON.parse(localStorage.getItem("Product"));
  var [indeximgselect, setindeximgselect] = useState(0);
  return (
    <div className="w-full h-auto">
      <BreadCrumb links={["Trang chủ", "Áo"]} typography={Product.title} />
      <div className="w-full px-[var(--padding-header)] pt-6 flex ">
        <div className="h-auto flex-1 border flex">
          <div className="flex-col flex w-[92px] gap-2">
            {Product.srcimg.map((item, index) => {
              return (
                <button
                  key={index}
                  className={` w-full rounded-md overflow-hidden px-[6px] py-[6px] 
                ${indeximgselect === index ? "border-black border" : ""}
                `}
                  onClick={() => {
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
            <img
              src={Product.srcimg[indeximgselect]}
              className="h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="h-auto flex-1 border"></div>
      </div>
    </div>
  );
}

export default Product;
