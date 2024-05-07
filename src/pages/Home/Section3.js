import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 150; // Điều chỉnh giá trị này để thay đổi lượng scroll
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 150; // Điều chỉnh giá trị này để thay đổi lượng scroll
    }
  };
  return (
    <section className="flex flex-col items-center mb-3 relative ">
      <h2 className="text-[var(--text-color)] text-[2em] mb-[40px]">
        MAYBI DANH MỤC SẢN PHẨM
      </h2>

      <span className="absolute left-[-60px] top-[45%]">
        <IconButton onClick={scrollLeft}>
          <ChevronLeftIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronLeftIcon>
        </IconButton>
      </span>
      <span className="absolute right-[-60px] top-[45%]">
        <IconButton onClick={scrollRight}>
          <ChevronRightIcon
            className="text-black"
            sx={{ fontSize: 40 }}
          ></ChevronRightIcon>
        </IconButton>
      </span>

      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          flexWrap: "nowrap",
          display: "flex",
          overflow: "hidden",
          justifyContent: "space-between",
        }}
        className={"scroll-setting"}
      >
        {menuItems.map((menuItem, index) => {
          return (
            <div key={index} className="m-3 min-w-[150px]">
              <a href={menuItem.link}>
                <div className="ss_img">
                  <img
                    className=" m-auto object-contain  w-auto "
                    src={menuItem.imgsrc}
                    width="150"
                    height="150"
                    alt="season_coll_6_img.png"
                  />
                </div>
                <div className="ss_info ">
                  <div className="ss_name">{menuItem.ssname}</div>
                  <span className="ss_number">{menuItem.ssnumber}</span>
                </div>
              </a>
            </div>
          );
        })}
      </Box>
    </section>
  );
}

Section3.propTypes = {};

export default Section3;
