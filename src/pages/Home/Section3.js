import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector } from "react-redux";
import { createRef } from "react";

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
  const containerRef = useRef(null);

  var currentWidth = useSelector((s) => s.responsive.currentWidth);
  const itemRefs = useRef([]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthItem, setwidthItem] = useState(150 + 25);

  var handleScroll = (scrollAmount) => {
    var newscrollPosition = scrollPosition + scrollAmount;
    if (newscrollPosition < 0) return;
    if (newscrollPosition > 1000) return;
    setScrollPosition(newscrollPosition);
    containerRef.current.scrollLeft = newscrollPosition;
    console.log("scrollPosition");
  };

  useEffect(() => {
    itemRefs.current = Array(menuItems.length)
      .fill()
      .map((_, i) => itemRefs.current[i] || createRef());
  }, []);

  useEffect(() => {
    itemRefs.current.forEach((item) => {
      if (item.current) {
        if (currentWidth * 0.18 >= 150) {
          item.current.style.width = 150 + "px";
          setwidthItem(150 + 25);
          return;
        }
        item.current.style.width = currentWidth * 0.18 + "px";
        setwidthItem(currentWidth * 0.18 + 25);
      }
    });
  }, [currentWidth]);

  return (
    <section className="flex flex-col items-center mb-12 relative ">
      <h2 className="text-[var(--text-color)] text-[2em] mb-[40px]">
        MAYBI DANH MỤC SẢN PHẨM
      </h2>

      <span className="absolute left-[-60px] top-[45%] hidden btn-chuyentrang">
        <IconButton
          onClick={() => {
            handleScroll(-widthItem);
          }}
        >
          <ChevronLeftIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronLeftIcon>
        </IconButton>
      </span>
      <span className="absolute right-[-60px] top-[45%] hidden btn-chuyentrang">
        <IconButton
          onClick={() => {
            handleScroll(widthItem);
          }}
        >
          <ChevronRightIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronRightIcon>
        </IconButton>
      </span>

      <div
        ref={containerRef}
        className={`w-full overflow-x-scroll scroll-setting menuSection3`}
      >
        <div className="menuSection3 w-fit flex-nowrap flex gap-[25px]">
          {menuItems.map((menuItem, index) => {
            return (
              <div
                ref={itemRefs.current[index]}
                key={index}
                className={`my-3 w-[150px] ss_item`}
              >
                <a href={menuItem.link} className="w-full">
                  <div className="ss_img">
                    <img
                      className=" m-auto object-contain  w-auto "
                      src={menuItem.imgsrc}
                      width="150"
                      height="150"
                      alt="season_coll_6_img.png"
                    />
                  </div>
                  <div className="mt-[9px] flex flex-col items-center w-full">
                    <div className="text-center text-[1rem] font-[500] overflow-hidden text-ellipsis ">
                      {menuItem.ssname}
                    </div>
                    <span className="text-[0.875rem] font-[500] text-[#888]">
                      {menuItem.ssnumber}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section3;

// overflow-hidden text-ellipsis
