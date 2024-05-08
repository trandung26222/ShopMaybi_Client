import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.7)",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

function Section1(props) {
  var backgroundimg = [
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_3.jpg?v=754",
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_1.jpg?v=763",
  ];
  var [indexbackgroundimg, setindexbackgroundimg] = useState(0);

  return (
    <section className="relative">
      <img
        src={backgroundimg[indexbackgroundimg]}
        alt=""
        className="cursor-pointer"
      />
      <span className="absolute top-[50%] left-[20px]">
        <IconButtonCustom
          onClick={() => {
            setindexbackgroundimg((indexbackgroundimg + 1) % 2);
          }}
        >
          <ChevronLeftIcon></ChevronLeftIcon>
        </IconButtonCustom>
      </span>
      <span className="absolute top-[50%] right-[20px]">
        <IconButtonCustom
          onClick={() => {
            setindexbackgroundimg((indexbackgroundimg + 1) % 2);
          }}
          className=""
        >
          <ChevronRightIcon></ChevronRightIcon>
        </IconButtonCustom>
      </span>
    </section>
  );
}

Section1.propTypes = {};

export default Section1;
