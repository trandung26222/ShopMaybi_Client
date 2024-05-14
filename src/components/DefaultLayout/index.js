import React from "react";

import { useSelector } from "react-redux";
import { useRef } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import Coat from "./Coat";
import Footer from "./Footer";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

function DefaultLayout({ children }) {
  var Sidebar = useSelector((state) => state.ElementDomSlice.Sidebar);
  var conRef = useRef();
  var mainClassName =
    "relative w-[100vw] h-[100vh] overflow-y-auto scroll-setting";
  return (
    <div ref={conRef} className={mainClassName}>
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
