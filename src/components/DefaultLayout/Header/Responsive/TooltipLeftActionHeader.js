import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export var databtn = [
  {
    icon: faMagnifyingGlass,
    p: "Tìm kiếm",
  },
  {
    icon: faUser,
    p: "Đăng nhập",
  },
  {
    icon: faUser,
    p: "Đăng ký",
  },
  {
    icon: faCartShopping,
    p: "Giỏ hàng",
  },
];

function TooltipLeftActionHeader(props) {
  var renderTippy = () => (
    <div className="w-[130px] h-[170px] bg-white shadow-xl rounded-xl">
      <div className="flex flex-col items-start w-full h-full justify-between  ">
        {databtn.map((item, index) => {
          return (
            <Link
              key={index}
              className="flex text-[16px] items-center py-[9px] rounded-md text-black bg-white hover:bg-[rgba(0,0,0,0.1)]  w-full pl-5 relative gap-2"
            >
              <FontAwesomeIcon icon={item.icon} />
              <p className="text-[15px]">{item.p}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
  return (
    <span className="xl:hidden xs:block">
      <Tippy
        interactive
        placement="bottom"
        render={renderTippy}
        offset={[0, 0]}
        delay={[500, 0]}
      >
        <span className="text-[24px] cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </span>
      </Tippy>
    </span>
  );
}

TooltipLeftActionHeader.propTypes = {};

export default TooltipLeftActionHeader;
