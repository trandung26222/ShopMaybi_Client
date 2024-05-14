import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleBackToTopButton } from "~/redux/slices/ElementDomSlice";

function BackToTopButton({ getContainerRef }) {
  var visible = useSelector((s) => s.ElementDomSlice.BackToTopButton);
  var dispatch = useDispatch();
  const handleClick = () => {
    const containerRef = getContainerRef();
    containerRef.scrollTo(0, 0);
  };

  useEffect(() => {
    const containerRef = getContainerRef();
    var handleScroll = () => {
      if (containerRef.scrollTop > 500) {
        dispatch(toggleBackToTopButton(true));
      } else {
        dispatch(toggleBackToTopButton(false));
      }
    };
    containerRef.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-8 bottom-6  w-[35px] h-[35px] bg-purple-600 z-1000 rounded
        hover:opacity-[0.8]  transition-opacity duration-100 ease-in-out    
      ${visible ? "block" : "hidden"}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="text-[18px] text-white" icon={faArrowUp} />
    </button>
  );
}

export default BackToTopButton;
