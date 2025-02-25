import React, { useState, useContext } from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { ConfigProvider } from "antd";
import Avatar from "@mui/material/Avatar";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { ProfileContext } from "~/Context/ProfileContext";

function Sidebar() {
  const CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  var [selectedKeys, setselectedKeys] = useState();

  var { key, setKey } = useContext(ProfileContext);

  const onClick = (e) => {
    setselectedKeys(e.key);
  };
  const menuProps = {
    onClick: onClick,
    style: {
      width: "100%",
      fontWeight: 500,
    },
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    mode: "inline",
    items: items,
    expandIcon: <></>,
  };
  var handleedit = () => {
    setselectedKeys("1");
  };

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full  px-4 py-4 flex items-center gap-5">
        <Avatar
          alt="Remy Sharp"
          src={CurrentUser.avatar}
          sx={{ width: 45, height: 45 }}
        />
        <div className="flex flex-col gap-1 items-start">
          <p className="text-[15px] font-[700]">{CurrentUser.username}</p>
          <button
            className="text-[13px] text-gray-400 hover:text-gray-500"
            onClick={handleedit}
          >
            <FontAwesomeIcon className="mr-1" icon={faPen} />
            Sửa hồ sơ
          </button>
        </div>
      </div>
      <ConfigProvider theme={theme}>
        <Menu {...menuProps} selectedKeys={selectedKeys} />
      </ConfigProvider>
    </div>
  );
}
const items = [
  {
    key: "sub1",
    label: "Tài khoản của tôi",
    icon: <UserOutlined />,
    children: [
      {
        key: "1",
        label: "Hồ sơ",
      },
      {
        key: "2",
        label: "Ngân hàng",
      },
      {
        key: "3",
        label: "Địa chỉ",
      },
      {
        key: "4",
        label: "Đổi mật khẩu",
      },
      {
        key: "5",
        label: "Cài đặt thông báo",
      },
      {
        key: "6",
        label: "Thiết lập riêng tư",
      },
    ],
  },
  {
    key: "sub2",
    icon: <AssignmentIcon />,
    label: "Đơn mua",
  },
  {
    key: "sub3",
    icon: <FontAwesomeIcon icon={faBell} />,
    label: "Thông báo",
  },
  {
    key: "sub4",
    icon: <ConfirmationNumberIcon />,
    label: "Kho Voucher",
  },
];

var theme = {
  components: {
    Menu: {
      itemHoverBg: "white",
      itemSelectedBg: "white",
      iconSize: 18,
      itemHeight: 37,
      itemColor: "#858585",
      itemHoverColor: "#6F6F6F",
      itemSelectedColor: "#4096FF",
      activeBarBorderWidth: "0",
      subMenuItemBg: "white",
    },
  },
};

export default Sidebar;
