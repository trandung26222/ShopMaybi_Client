import React from "react";
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DataCollection } from "~/Data/DataCollection";

import { useState } from "react";

function MiddleMenu() {
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
  return (
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
  );
}

export default MiddleMenu;
