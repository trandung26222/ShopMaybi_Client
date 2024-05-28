import React, { useEffect, useState } from "react";
import { Flex, Popover } from "antd";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleSearch } from "~/redux/slices/ElementDomSlice";

function Search() {
  var classnamemain =
    "w-[100vw] h-[100vh] fixed z-[1000] bg-[rgba(0,0,0,0.4)] cursor-pointer flex flex-col";
  var classnamesearch =
    "w-full h-[120px] px-[var(--padding-header)] bg-white absolute top-0 left-0 ";

  var disp = useDispatch();
  var [isRender, setisRender] = useState(false);
  var handleCloseSearch = () => {
    disp(toggleSearch());
  };

  useEffect(() => {
    setisRender(true);
  }, []);

  return (
    <div className={`${classnamemain}`}>
      <Flex
        align="center"
        justify="space-between"
        className={`${classnamesearch} translate-y-[-100%] transition-transform duration-1000 ease-in-out 
            ${isRender ? "translate-y-[0]" : "translate-y-[-100%]"}
        `}
      >
        <div className="h-[60%] ">
          <img
            className={`h-full object-contain  `}
            src="//theme.hstatic.net/1000341902/1001140246/14/logo_medium.png?v=754"
            alt="logo MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
          ></img>
        </div>
        <Popover content={ContentSearch} arrow={false}>
          <Flex align="center" className="w-[40%] relative">
            <input
              className="w-full h-[45px] border rounded-full border-black px-6 text-[14px] outline-none "
              type="text"
              name=""
              id=""
            />
            <button className="hover:scale-95 transition-transform duration-[400ms] ease-in-out absolute h-[90%] bg-[rgba(0,0,0,0.8)] py-1 px-6 rounded-full right-[2px]">
              <IoSearch className="text-[20px] text-white" />
            </button>
          </Flex>
        </Popover>
        <Flex
          align="center"
          justify="space-between"
          gap={40}
          className="px-[30px]"
        >
          <BsCart3 fontSize={20} />
          <FaRegUser fontSize={18} />
        </Flex>
      </Flex>
      <button className="w-full h-full" onClick={handleCloseSearch}></button>
    </div>
  );
}

var ContentSearch = () => {
  return (
    <Flex
      vertical
      className="mt-3 rounded-lg w-[460px] h-[380px] bg-white pt-4 text-[10px] px-0 overflow-y-hidden"
    >
      <p className="text-[1.6em] font-[600] text-gray-400 mb-1 px-4">
        Kết quả tìm kiếm cho{" "}
      </p>
      <Flex justify="space-between" align="center" className="px-4">
        <p className="text-[1.6em] font-[600] text-black">
          Hiển thị kết quả theo:
        </p>
        <p className="text-[1.6em] font-[400] text-white bg-[rgba(0,0,0,0.4)] rounded-2xl py-1 px-3">
          Sản phẩm
        </p>
      </Flex>
      <Flex vertical className="px-4 h-full">
        <div className="h-full w-full bg-lime-50"></div>
      </Flex>
      <Flex
        vertical
        className="h-[60px] relative text-[1.4em]"
        align="center"
        justify="center"
      >
        <span className="w-full h-[1px] bg-[rgba(0,0,0,0.1)] absolute top-0"></span>
        <p>Không tìm thấy sản phẩm!</p>
        {/* <p>Xem thêm sản phẩm: {}</p> */}
      </Flex>
    </Flex>
  );
};

export default Search;
