import React, { useEffect } from "react";
import { getCurrentUser } from "~/CallAPI/profile";
import { useDispatch } from "react-redux";
function Test() {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser(localStorage.getItem("uid")));
  }, []);
  return <div className="w-full h-[500px]">Test</div>;
}

export default Test;
