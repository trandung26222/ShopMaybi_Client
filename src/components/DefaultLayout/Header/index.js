import React from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleSidebar } from "../../../redux/slices/SidebarSlice";
import { menuCollectionItem } from "./menuCollectionItem";

function Header(props) {
  const [MenuItemindex, setMenuItemindex] = useState([0, 1, 2, 3]);
  const lengthmenuitem = menuCollectionItem.length;
  var currentWidth = useSelector((state) => state.responsive.currentWidth);
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
  var breakpoint = 1106;
  var dispatch = useDispatch();

  return (
    <header className="bg-white  z-[1] sticky top-0 w-full h-[var(--height-header)]  flex items-center px-[var(--padding-header)] justify-between shadow-md">
      {currentWidth < 1106 && (
        <button
          className="cursor-pointer text-[24px]"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      )}

      <img
        className={`mr-14 cursor-pointer    ${
          currentWidth < breakpoint && "absolute left-[40%]"
        }`}
        src="//theme.hstatic.net/1000341902/1001140246/14/logo_medium.png?v=754"
        alt="logo MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
        width="134"
        height="61"
      ></img>
      {currentWidth >= 1106 && (
        <>
          <nav className="flex items-start gap-6 w-full">
            {menuCollectionItem.map((item, index) => {
              if (MenuItemindex.includes(index)) {
                return (
                  <div
                    key={index}
                    className=" parent flex flex-col items-center relative cursor-pointer "
                  >
                    <NavLink
                      key={index}
                      to="/messages"
                      className={`text-[1rem] flex items-center gap-1 font-semibold ${
                        currentWidth < 1106 ? "hidden" : "flex"
                      }`}
                    >
                      {item.iconSrc && (
                        <>
                          <img
                            width="24"
                            height="24"
                            src={item.iconSrc}
                            alt={item.alt}
                          />
                        </>
                      )}
                      <p className="text-gray-600">{item.text}</p>
                    </NavLink>

                    <span className="child-span w-full  h-[1.6px] bg-slate-500 relative my-[0.3rem] invisible transition-opacity ease-in-out duration-1000 opacity-0"></span>
                  </div>
                );
              }
              return null;
            })}
          </nav>

          <div
            className={`flex gap-2 ml-8 mr-8 items-center ${
              currentWidth < 1106 ? "hidden" : "flex"
            }`}
          >
            <div size="small">
              <button
                className={`w-[39px] h-[39px] ${
                  MenuItemindex[0] === 0 ? "cursor-not-allowed" : ""
                }`}
                onClick={handlepre}
              >
                <ChevronLeftIcon className="hover:text-gray-800 text-black"></ChevronLeftIcon>
              </button>
            </div>
            <div size="small">
              <button
                onClick={handlenext}
                className={`w-[39px] h-[39px] ${
                  MenuItemindex[0] === 4 ? "cursor-not-allowed" : ""
                }`}
              >
                <ChevronRightIcon className="hover:text-gray-800 text-black"></ChevronRightIcon>
              </button>
            </div>
          </div>
        </>
      )}

      <div className="flex items-center gap-4 ">
        <button className="btn-action-header">
          <SearchOutlined className="text-[1.75rem]" />
          <p className="p-action-header">Tìm kiếm</p>
        </button>

        <Tooltip
          enterDelay={200}
          leaveDelay={500}
          title={
            <div className=" flex flex-col w-[80px] h-[65px] text-[0.9rem] p-0 gap-2 justify-center items-start px-1">
              <button
                className=""
                onClick={() => {
                  console.log("hello");
                }}
              >
                Đăng nhập
              </button>
              <button className="">Đăng ký</button>
            </div>
          }
          arrow
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -5],
                  },
                },
              ],
            },
          }}
        >
          <button className="btn-action-header">
            <PermIdentityIcon sx={{ fontSize: 28.5 }} />
            <p className="p-action-header">Đăng nhập</p>
          </button>
        </Tooltip>

        <button className="btn-action-header">
          <ShoppingBagOutlinedIcon
            sx={{ fontSize: 30 }}
          ></ShoppingBagOutlinedIcon>
          <p className="p-action-header">Giỏ hàng</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
