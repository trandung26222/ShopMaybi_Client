import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Item from "./Item";

function Section3(props) {
  const menuItems = [
    {
      link: "/collections/new-arrival-maybi-is-back",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_1_img_large.png?v=754",
      datasrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_1_img_large.png?v=754",
      ssname: "NEW ARRIVAL - MAYBI's back",
      ssnumber: "150 sản phẩm",
    },
    {
      link: "/collections/best-seller",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_2_img_large.png?v=754",
      ssname: "BEST SELLER",
      ssnumber: "55 sản phẩm",
    },
    {
      link: "/collections/vay-dam",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_3_img_large.png?v=754",
      ssname: "ĐẦM",
      ssnumber: "174 sản phẩm",
    },
    {
      link: "/collections/ao-nu",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_4_img_large.png?v=754",
      ssname: "ÁO",
      ssnumber: "211 sản phẩm",
    },
    {
      link: "/collections/vay-quan",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_5_img_large.png?v=754",
      ssname: "VÁY & QUẦN",
      ssnumber: "125 sản phẩm",
    },
    {
      link: "/collections/homewear",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_6_img_large.png?v=754",
      ssname: "ĐỒ NGỦ",
      ssnumber: "11 sản phẩm",
    },
    {
      link: "/collections/ao-dai        ",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_7_img_large.png?v=754      ",
      ssname: "ÁO DÀI",
      ssnumber: "22 sản phẩm",
    },
    {
      link: "/",
      imgsrc:
        "//theme.hstatic.net/1000341902/1001140246/14/season_coll_8_img_large.png?v=754      ",
      ssname: "Sản phẩm",
      ssnumber: "1112 sản phẩm",
    },
  ];
  const overflowRef = useRef(null);
  const flexRef = useRef(null);
  const [widthOverFlow, setwidthOverFlow] = useState();
  const [widthFlex, setwidthFlex] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const w = overflowRef.current.clientWidth;
    setwidthOverFlow((pre) => w);
    const w1 = flexRef.current.clientWidth;
    setwidthFlex((pre) => w1);
  }, []);

  var handleScroll = (scrollAmount) => {
    var newscrollPosition = scrollPosition + scrollAmount;
    if (newscrollPosition < 0) return;
    if (newscrollPosition > widthFlex) return;
    setScrollPosition((pre) => newscrollPosition);
    overflowRef.current.scrollLeft = newscrollPosition;
  };

  return (
    <section className="flex flex-col items-center  mb-12 relative ">
      <h2 className="text-[var(--text-color)] text-[2.7em] mb-[40px]">
        MAYBI DANH MỤC SẢN PHẨM
      </h2>

      <span className="absolute left-[-60px] top-[45%] hidden xl:block ">
        <IconButton
          onClick={() => {
            handleScroll(-widthOverFlow);
          }}
        >
          <ChevronLeftIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronLeftIcon>
        </IconButton>
      </span>
      <span className="absolute right-[-60px] top-[45%] hidden xl:block">
        <IconButton
          onClick={() => {
            handleScroll(widthOverFlow);
          }}
        >
          <ChevronRightIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronRightIcon>
        </IconButton>
      </span>

      <div
        ref={overflowRef}
        className={`w-full scroll-setting xl:overflow-hidden xs:overflow-auto`}
      >
        <div
          ref={flexRef}
          className=" xs:w-[1000px] sm:w-[1100px] md:w-[1200px] lg:w-[1375px] flex "
        >
          {menuItems.map((menuItem, index) => {
            return <Item key={index} menuItem={menuItem}></Item>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Section3;
