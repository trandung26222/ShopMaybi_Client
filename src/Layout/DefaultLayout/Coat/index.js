import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "~/redux/slices/ElementDomSlice";

function Coat(props) {
  var dp = useDispatch();
  return (
    <button
      className="w-[100%] h-[100vh] fixed top-0 right-0 bg-[rgba(0,0,0,0.4)] z-[998] "
      onClick={() => {
        dp(toggleSidebar());
      }}
    ></button>
  );
}

export default Coat;
