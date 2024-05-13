import React from "react";
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleSidebar } from "../../../redux/slices/ElementDomSlice";
import { Link } from "react-router-dom";
import LeftActionHeader from "./LeftMenu";
import TooltipLeftActionHeader from "./Responsive/TooltipLeftActionHeader";
import { DataCollection } from "../../Data/DataCollection";

function Header(props) {
  const [MenuItemindex, setMenuItemindex] = useState([0, 1, 2, 3]);
  const lengthmenuitem = DataCollection.length;
  const handlepre = () => {
    setMenuItemindex([0, 1, 2, 3]);
  };
  const handlenext = () => {
    var tmp = [];
    MenuItemindex.forEach((c, index) => {
      if (index + 4 < lengthmenuitem) {
        tmp.push(index + 4);
      }
    });
    setMenuItemindex(tmp);
  };
  var dispatch = useDispatch();

  return (
    <header
      className="bg-white  z-[2] sticky top-0 w-full h-[var(--height-header)]  flex items-center
     px-[var(--padding-header)] justify-between shadow-lg xl:text-[16px] xs:text-[13px]  "
    >
      <button
        className="cursor-pointer text-[24px] xl:hidden"
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>

      <Link className="xl:mr-14 h-full" to={"/"}>
        <img
          className={`xs:h-full xl:h-auto object-contain  `}
          src="//theme.hstatic.net/1000341902/1001140246/14/logo_medium.png?v=754"
          alt="logo MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
        ></img>
      </Link>

      <div className="xs:hidden xl:flex   h-full items-center w-full">
        <nav className="flex gap-6 w-full">
          {DataCollection.map((item, index) => {
            if (MenuItemindex.includes(index)) {
              return (
                <div
                  key={index}
                  className=" parent flex flex-col items-center relative cursor-pointer "
                >
                  <NavLink
                    key={index}
                    to={item.link}
                    className={`text-[1em] items-center gap-1 font-semibold hidden xl:flex `}
                  >
                    {item.iconSrc && (
                      <>
                        <img
                          width={"24"}
                          height={"24"}
                          src={item.iconSrc}
                          alt={item.alt}
                        />
                      </>
                    )}
                    <p className="text-gray-600">{item.text}</p>
                  </NavLink>

                  <span className="child-span w-full  h-[1.6px] bg-slate-500 relative my-[5px] invisible transition-opacity ease-in-out duration-1000 opacity-0"></span>
                </div>
              );
            }
            return null;
          })}
        </nav>

        <div className={`flex gap-2 mx-8 items-center`}>
          <button
            className={`w-[39px] h-[39px] ${
              MenuItemindex[0] === 0 ? "cursor-not-allowed" : ""
            }`}
            onClick={handlepre}
          >
            <ChevronLeftIcon
              sx={{ fontSize: "20px" }}
              className="hover:text-gray-800 text-black"
            ></ChevronLeftIcon>
          </button>
          <button
            onClick={handlenext}
            className={`w-[39px] h-[39px] ${
              MenuItemindex[0] === 4 ? "cursor-not-allowed" : ""
            }`}
          >
            <ChevronRightIcon
              sx={{ fontSize: "20px" }}
              className="hover:text-gray-800 text-black"
            ></ChevronRightIcon>
          </button>
        </div>
      </div>

      <LeftActionHeader />

      <TooltipLeftActionHeader />
    </header>
  );
}

export default Header;
