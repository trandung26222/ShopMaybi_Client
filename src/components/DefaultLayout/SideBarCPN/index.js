import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { menuCollectionItem } from "../../Data/menuCollectionItem";

function SideBar(props) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div
      className={`sidebar block w-[40%] h-[100vh] bg-white z-[999] opacity-0 fixed transition-opacity duration-[600ms] ease-in-out 
      
      ${isRendered ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-full h-[68px] bg-black flex items-center px-7 gap-3">
        <span className="text-white text-[26px]">
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        <div className="flex flex-col text-white items-start text-[15px]">
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </div>
      <div className="flex flex-col pt-4">
        {menuCollectionItem.map((item, index) => {
          return (
            <NavLink
              key={index}
              to="/messages"
              className={`text-[16px] flex items-center font-semibold relative py-4 rounded-xl`}
              onMouseEnter={(e) => {
                e.target.classList.add("bg-[rgba(0,0,0,0.2)]");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("bg-[rgba(0,0,0,0.2)]");
              }}
            >
              <p className="text-black pl-4 font-[400] tracking-wide">
                {item.text}
              </p>

              {item.iconSrc && (
                <>
                  <img
                    width="24"
                    height="24"
                    src={item.iconSrc}
                    alt={item.alt}
                    className="absolute right-5"
                  />
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
