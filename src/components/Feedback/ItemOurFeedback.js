import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ItemOurFeedback({ props }) {
  const sosao = parseInt(props.star);
  var hasHalf = false;
  if (parseFloat(props.star) - sosao === 0.5) {
    hasHalf = true;
  }

  return (
    <div className="w-[367px] h-full bg-white rounded-lg px-[23px] py-[20px] flex flex-col justify-start border relative">
      <h2 className="text-[20px] tracking-wide relative">{props.username}</h2>
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

      <p className="w-[67%] text-start mb-9">{props.content}</p>
      <img
        src={props.imgsrc}
        className="w-[100px] absolute right-[23px] top-[20px]"
        alt=""
      />
      <span className="w-[321px] h-[1px] bg-[rgba(0,0,0,0.3)] absolute bottom-14"></span>
    </div>
  );
}

ItemOurFeedback.propTypes = {};

export default ItemOurFeedback;
