import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleCartPreview } from "~/redux/slices/ElementDomSlice";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

function ContentPreview({ CurrentProduct }) {
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 right-0  bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center">
      <div className="w-[60%] h-[80%] bg-white rounded-2xl flex relative overflow-hidden">
        <ContentLeft CurrentProduct={CurrentProduct} />
        <BtnClose />
        <ContentRight CurrentProduct={CurrentProduct} />
      </div>
    </div>
  );
}

var BtnClose = () => {
  var dispatch = useDispatch();

  return (
    <button
      className="absolute right-4 top-4 cursor-pointer"
      onClick={() => {
        dispatch(toggleCartPreview());
      }}
    >
      <FontAwesomeIcon icon={faXmark} className="text-[20px]" />
    </button>
  );
};

export default ContentPreview;
