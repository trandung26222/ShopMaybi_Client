import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import SideBar from "./SideBarCPN";
import Coat from "./Coat";

function DefaultLayout({ children }) {
  var Sidebar = useSelector((state) => state.Sidebar.Sidebar);
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-y-auto scroll-setting ">
      {Sidebar && <SideBar />}
      {Sidebar && <Coat />}
      <Header />
      {children}
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;

/*
{Sidebar && (
        <div className=" z-[1000] block absolute top-[-10px] w-full h-full bg-[rgba(0,0,0,0.5)]">
          hello
        </div>
      )}
*/
