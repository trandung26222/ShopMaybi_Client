import React from "react";

import { useSelector } from "react-redux";
import { useRef } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import Coat from "./Coat";
import Footer from "./Footer";
import BackToTopButton from "~/components/BackToTopButton";
import ButtonContact from "~/components/ButtonContact";
import ButtonNotification from "~/components/ButtonNotification";

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
      <ButtonNotification />
      <ButtonContact />
    </div>
  );
}

export default DefaultLayout;
