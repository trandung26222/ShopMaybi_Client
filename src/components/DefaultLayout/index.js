import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-y-auto scroll-setting ">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
