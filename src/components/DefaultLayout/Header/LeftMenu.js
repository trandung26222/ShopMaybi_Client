import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import LoginSignUp from "./RenderTippy/LoginSignup";
import Cart from "./RenderTippy/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

var items = [
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    p: "Tìm kiếm",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    p: "Tài khoản",
  },
  {
    icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 17 }} />,
    p: "Giỏ hàng",
  },
];

function LeftActionHeader(props) {
  var classNamebtnaction = `flex flex-col text-black items-center 
  cursor-pointer gap-[5px] px-1 py-1 rounded transition-opacity 
  duration-[300ms] ease-in-out hover:opacity-[0.5] text-[16px]`;
  var classNamePaction = "whitespace-nowrap text-[14px] font-[400]";

  return (
    <div className=" items-center gap-4 xl:flex  xs:hidden ">
      <button className={classNamebtnaction}>
        {items[0].icon}
        <p className={classNamePaction}>{items[0].p}</p>
      </button>

      <span>
        <Tippy
          interactive
          placement="bottom"
          render={LoginSignUp}
          offset={[0, 0]}
          delay={[200, 0]}
        >
          <button className={classNamebtnaction}>
            {items[1].icon}
            <p className={classNamePaction}>{items[1].p}</p>
          </button>
        </Tippy>
      </span>

      <span>
        <Tippy
          interactive
          placement="bottom"
          render={Cart}
          offset={[0, 0]}
          delay={[200, 0]}
          trigger="mouseenter "
        >
          <Link to={"/cart"} className={classNamebtnaction}>
            {items[2].icon}
            <p className={classNamePaction}>{items[2].p}</p>
          </Link>
        </Tippy>
      </span>
    </div>
  );
}

export default LeftActionHeader;

/*
{items.map((item, index) => {
        return (
          <ButtonLeftActionHeader
            key={index}
            item={item}
          ></ButtonLeftActionHeader>
        );
      })}
*/
