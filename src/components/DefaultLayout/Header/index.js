import React from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const menuItems = [
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_1.png?v=754",
    alt: "MỚI VỀ",
    text: "MỚI VỀ",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_2.png?v=754",
    alt: "MOTHER'S DAY",
    text: "MOTHER'S DAY",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_3.png?v=754",
    alt: "LAST CHANCE",
    text: "LAST CHANCE",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_4.png?v=754",
    alt: "BÁN CHẠY",
    text: "BÁN CHẠY",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_5.png?v=754",
    alt: "SẢN PHẨM",
    text: "SẢN PHẨM",
  },
  {
    text: "THỜI TRANG CÔNG SỞ",
  },
  {
    text: "BLOG",
  },
];

function Header(props) {
  const [MenuItemindex, setMenuItemindex] = useState([0, 1, 2, 3]);
  const lengthmenuitem = menuItems.length;
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
  const renderTippy = () => {
    return (
      <div className="bg-black text-white ">
        <button>Đăng nhập</button>
        <button>Đăng kí</button>
      </div>
    );
  };
  return (
    <header className="bg-white  z-[1000] sticky top-0 w-full h-[var(--height-header)]  flex items-center px-[var(--padding-header)] justify-between shadow-md">
      <img
        className="mr-14 cursor-pointer"
        src="//theme.hstatic.net/1000341902/1001140246/14/logo_medium.png?v=754"
        alt="logo MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
        width="134"
        height="61"
      ></img>

      <nav className="flex items-start gap-6 w-full">
        {menuItems.map((item, index) => {
          if (MenuItemindex.includes(index)) {
            return (
              <div
                key={index}
                className=" parent flex flex-col items-center relative  cursor-pointer"
              >
                <NavLink key={index} to="/messages" className="navlink-header">
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
                  <p className="p-header-collection">{item.text}</p>
                </NavLink>
                <span className="child-span w-full h-[1.6px] bg-slate-500 relative my-[0.3rem] invisible tran-width "></span>
              </div>
            );
          }
          return null;
        })}
      </nav>

      <div className="flex gap-2 ml-8 mr-8 items-center">
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

      <div className="flex items-center gap-4 ">
        <button className="btn-action-header">
          <SearchOutlined className="text-[1.75rem]" />
          <p className="p-action-header">Tìm kiếm</p>
        </button>

        <Tooltip
          title={
            <div className="flex flex-col w-[80px] h-[65px] text-[0.9rem] p-0 gap-2 justify-center items-start px-1">
              <button className="">Đăng nhập</button>
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
