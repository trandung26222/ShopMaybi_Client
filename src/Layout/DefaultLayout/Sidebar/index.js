import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { DataCollection } from "~/Data/DataCollection";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "~/redux/slices/ElementDomSlice";

function SideBar(props) {
  const [isRendered, setIsRendered] = useState(false);
  var dispatch = useDispatch();
  useEffect(() => {
    setIsRendered(true);
  }, []);

  var handleClickLink = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`sidebar block w-[40%] h-[100vh] bg-white z-[999] fixed 
      translate-x-[-100%] transition-transform duration-700 ease-in-out
      ${isRendered ? "translate-x-[0]" : "translate-x-[-100%]"}
      `}
    >
      <div className="w-full h-[68px] bg-gray-100 flex items-center px-7 gap-6">
        <span className="text-black text-[26px]">
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        <div className="flex flex-col text-black items-start text-[15px]">
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </div>
      <div className="flex flex-col pt-4">
        {DataCollection.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.link}
              className={`text-[16px] flex items-center font-semibold relative py-4 rounded-xl`}
              onMouseEnter={(e) => {
                e.target.classList.add("bg-[rgba(0,0,0,0.04)]");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("bg-[rgba(0,0,0,0.04)]");
              }}
              onClick={handleClickLink}
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
                    className="absolute right-9"
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

export default SideBar;
