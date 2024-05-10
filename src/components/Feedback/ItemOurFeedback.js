import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

function ItemOurFeedback({ props }, ref) {
  const sosao = parseInt(props.star);
  var hasHalf = false;
  if (parseFloat(props.star) - sosao === 0.5) {
    hasHalf = true;
  }

  return (
    <div ref={ref} className="flex-1 h-full py-[0px]  pr-[15px] ">
      <div className="bg-white rounded-lg  p-[20px] w-full h-full flex flex-col justify-start border relative">
        <h2 className="text-[1.9em] tracking-wide relative">
          {props.username}
        </h2>
        <div className="flex gap-[3px] mt-4 mb-4">
          {Array(sosao)
            .fill()
            .map((item, index) => (
              <span key={index} className="text-[#FABD0D]">
                <FontAwesomeIcon key={index} icon={faStar} />
              </span>
            ))}
          {hasHalf && (
            <span className="text-[#FABD0D]">
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </span>
          )}
        </div>

        <p className=" w-[67%] text-start text-[1.5em]">{props.content}</p>
        <img
          src={props.imgsrc}
          className="w-[24%] absolute right-[23px] top-[20px]"
          alt=""
        />
        <span className="w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)] absolute bottom-[10%]"></span>
      </div>
    </div>
  );
}

export default forwardRef(ItemOurFeedback);
