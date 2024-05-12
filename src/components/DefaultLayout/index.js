import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import SideBar from "./SideBarCPN";
import Coat from "./Coat";
import { useRef } from "react";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

function DefaultLayout({ children }) {
  var Sidebar = useSelector((state) => state.Sidebar.Sidebar);
  var conRef = useRef();
  return (
    <div
      ref={conRef}
      className="relative w-[100vw] h-[100vh] overflow-y-auto scroll-setting "
    >
      {Sidebar && <SideBar />}
      {Sidebar && <Coat />}

      <Header />
      {children}
      <Footer />
      <BackToTopButton getContainerRef={() => conRef.current} />
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
