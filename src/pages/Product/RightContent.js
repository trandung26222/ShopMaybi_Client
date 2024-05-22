import React, { useLayoutEffect, useRef } from "react";
import { Flex } from "antd";
import { Rate } from "antd";

function RightContent({ Product }) {
  var RefTMP = useRef();
  useLayoutEffect(() => {
    console.log(RefTMP.current);
    var alllinks = RefTMP.current.querySelectorAll("a");
    for (var i = 0; i < alllinks.length; i++) {
      alllinks[i].style.textDecoration = "underline";
      alllinks[i].style.color = "rgba(0,0,0,0.9)";
    }
  }, []);
  var propFlexItem = {
    align: "center",
    className: "text-[1.4em] font-[500] mb-3",
  };
  return (
    <Flex vertical={true} ref={RefTMP}>
      <p className=" h-auto bg-lime-50 text-[2.1em] font-[700] text-start content-center mb-2 ">
        {Product.title}
      </p>
      <Flex {...propFlexItem}>
        Thương hiệu:
        <a href="/" className="ml-1">
          Maybi
        </a>
      </Flex>
      <Flex {...propFlexItem}>
        <Flex align="center" gap={7}>
          <a href="/" className="font-[600]">
            5.0
          </a>
          <Rate style={{ color: "#FD5D32" }} disabled defaultValue={5} />
        </Flex>
        <SpanHeader />
        <Flex align="center" gap={7}>
          <a href="/">24</a>
          <p className="text-[rgba(0,0,0,0.5)]">Đánh Giá</p>
        </Flex>
        <SpanHeader />
        <Flex align="center" gap={7}>
          <p>139</p>
          <p className="text-[rgba(0,0,0,0.5)]">Đã Bán</p>
        </Flex>
      </Flex>
      <Flex {...propFlexItem}>
        <p className="text-[rgba(0,0,0,0.4)]">4000đ - 8000đ</p>
      </Flex>
    </Flex>
  );
}

var SpanHeader = () => {
  return <span className="h-5 w-[0.7px] bg-[rgba(0,0,0,0.3)] mx-5"></span>;
};

export default RightContent;
