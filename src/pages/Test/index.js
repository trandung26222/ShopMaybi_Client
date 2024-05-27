import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "~/CallAPI/cart";
function Test() {
  var dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(getCart("66533af2a005dd7d6a26fcf6")));
    console.log(getCart("66533af2a005dd7d6a26f"));
  }, []);
  return <div className="w-full h-[500px]">Test</div>;
}

export default Test;
