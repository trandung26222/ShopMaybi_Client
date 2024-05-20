import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase";
import { showMessage } from "~/utils/showMessage";

var dataCurentUserTrue = [
  {
    icon: faMagnifyingGlass,
    p: "Tìm kiếm",
    link: "/",
  },
  {
    icon: faCartShopping,
    p: "Giỏ hàng",
    link: "/cart",
  },

  {
    icon: faUser,
    p: "Tài khoản",
    link: "/account/profile",
  },
  {
    icon: faArrowRightFromBracket,
    p: "Đăng xuất",
    link: "/account/login",
    handleLogout: true,
  },
];
var dataCurentUserFalse = [
  {
    icon: faMagnifyingGlass,
    p: "Tìm kiếm",
    link: "/",
  },
  {
    icon: faCartShopping,
    p: "Giỏ hàng",
    link: "/cart",
  },
  {
    icon: faUser,
    p: "Đăng nhập",
    link: "/account/login",
  },
  {
    icon: faUser,
    p: "Đăng ký",
    link: "/account/signup",
  },
];

function TooltipMobile(props) {
  const hascurrentuser = useSelector((s) => s.CurrentUserSlice.CurrentUser.has);
  var classNamecon1 = "w-[130px] h-[170px] bg-white shadow-xl rounded-xl";
  var classNamecon2 = "flex flex-col items-start w-full h-full justify-between";
  var classnameItem =
    "flex text-[16px] items-center py-[9px] rounded-md text-black bg-white hover:bg-[rgba(0,0,0,0.1)]  w-full pl-5 relative gap-2";

  var [dataPopOver, setDataPopOVer] = useState(
    hascurrentuser ? dataCurentUserTrue : dataCurentUserFalse
  );

  useEffect(() => {
    setDataPopOVer(hascurrentuser ? dataCurentUserTrue : dataCurentUserFalse);
  }, [hascurrentuser]);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        showMessage("success", "Đăng nhập thành công!");

        window.location.href = "/account/login";
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  var contentPopOver = () => (
    <div className={classNamecon1}>
      <div className={classNamecon2}>
        {dataPopOver.map((item, index) => {
          if (item.handleLogout) {
            return (
              <button
                key={index}
                className={classnameItem}
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={item.icon} />
                <p className="text-[15px]">{item.p}</p>
              </button>
            );
          }
          return (
            <Link to={item.link} key={index} className={classnameItem}>
              <FontAwesomeIcon icon={item.icon} />
              <p className="text-[15px]">{item.p}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <span className="xl:hidden xs:block w-fit h-fit">
      <Popover content={contentPopOver} arrow={false}>
        <span className="text-[24px] cursor-pointer w-[40px] h-[40px] content-center text-center block">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </span>
      </Popover>
    </span>
  );
}

TooltipMobile.propTypes = {};

export default TooltipMobile;
