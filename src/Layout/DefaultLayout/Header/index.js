import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleSidebar } from "~/redux/slices/ElementDomSlice";
import { Link } from "react-router-dom";

//----------------------------------------------------------------
import Menu from "./MiddleMenu";
import TooltipMobile from "./RenderTooltip/TooltipMobile";
import LeftMenu from "./RightMenu";

function Header() {
  var mainClassName = `bg-white  z-[2] sticky top-0 w-full
   h-[var(--height-header)]  flex items-center
  px-[var(--padding-header)] justify-between shadow-lg xl:text-[16px] xs:text-[13px] `;

  return (
    <header className={mainClassName}>
      <BtnMenuLeft />
      <ImgLogo />
      <Menu />
      <LeftMenu />
      <TooltipMobile />
    </header>
  );
}

const ImgLogo = () => (
  <Link className="xl:mr-14 h-full" to={"/"}>
    <img
      className={`xs:h-full xl:h-auto object-contain  `}
      src="//theme.hstatic.net/1000341902/1001140246/14/logo_medium.png?v=754"
      alt="logo MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
    ></img>
  </Link>
);
const BtnMenuLeft = () => {
  var dispatch = useDispatch();
  var animationBTN =
    "hover:scale-[96%] transition-transform duration-300 ease-in-out";
  return (
    <button
      className="cursor-pointer text-[24px] xl:hidden "
      onClick={() => {
        dispatch(toggleSidebar());
      }}
    >
      <FontAwesomeIcon className={animationBTN} icon={faBars}></FontAwesomeIcon>
    </button>
  );
};

export default Header;
