import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import TootipLoginSignup from "../RenderTooltip/TooltipLoginSignup";
import TooltipCart from "../RenderTooltip/TooltipCart";

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

function RightMenu(props) {
  var classNamebtnaction = `flex flex-col text-black items-center 
  cursor-pointer gap-[5px] px-1 py-1 rounded transition-opacity 
  duration-[300ms] ease-in-out hover:opacity-[0.5] text-[1em]`;
  var classNamePaction = "whitespace-nowrap text-[0.85em] font-[400]";

  return (
    <div className=" items-center gap-4 xl:flex  xs:hidden ">
      <button className={classNamebtnaction}>
        {items[0].icon}
        <p className={classNamePaction}>{items[0].p}</p>
      </button>

      <span>
        <Popover content={TootipLoginSignup} arrow={false}>
          <button className={classNamebtnaction}>
            {items[1].icon}
            <p className={classNamePaction}>{items[1].p}</p>
          </button>{" "}
        </Popover>
      </span>

      <span>
        <Popover content={TooltipCart} arrow={false}>
          <Link to={"/cart"} className={classNamebtnaction}>
            {items[2].icon}
            <p className={classNamePaction}>{items[2].p}</p>
          </Link>
        </Popover>
      </span>
    </div>
  );
}

export default RightMenu;

/*
<Tippy
          interactive
          placement="bottom"
          render={TooltipCart}
          offset={[0, 0]}
          delay={[200, 0]}
          trigger="mouseenter "
        >
          <Link to={"/cart"} className={classNamebtnaction}>
            {items[2].icon}
            <p className={classNamePaction}>{items[2].p}</p>
          </Link>
        </Tippy>

*/
