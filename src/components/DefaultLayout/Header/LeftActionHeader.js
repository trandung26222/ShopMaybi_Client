import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ButtonLeftActionHeader from "./ButtonLeftActionHeader";
import { Tooltip } from "@mui/material";

var items = [
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    p: "Tìm kiếm",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    p: "Đăng nhập",
  },
  {
    icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 17 }} />,
    p: "Giỏ hàng",
  },
];

function LeftActionHeader(props) {
  return (
    <div className="flex items-center gap-4 ">
      {items.map((item, index) => {
        return (
          <ButtonLeftActionHeader
            key={index}
            item={item}
          ></ButtonLeftActionHeader>
        );
      })}
    </div>
  );
}

LeftActionHeader.propTypes = {};

export default LeftActionHeader;
