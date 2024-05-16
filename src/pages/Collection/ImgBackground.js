import React from "react";

function ImgBackground({ props }) {
  return (
    <img
      src={props.imgbackground}
      alt=""
      className="object-contain w-full cursor-pointer mb-5
  hover:scale-[0.98] transition-transform duration-500 ease-in-out "
    />
  );
}

export default ImgBackground;
