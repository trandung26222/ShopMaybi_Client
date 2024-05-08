import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import { DataOurFeedback } from "./DataOurFeedback";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ItemOurFeedback from "./ItemOurFeedback";

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0.03)",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

function OurFeedBack(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  var gap = 23;
  var widthitem = 367;
  var tongwidth = 367 * 8 + 7 * 23;
  var nextwidth = gap + widthitem;

  const handleSCR = (scrollAmount) => {
    var newscrollPosition = scrollPosition + scrollAmount;
    if (newscrollPosition < 0) return;
    if (newscrollPosition > tongwidth) return;
    setScrollPosition(newscrollPosition);
    containerRef.current.scrollLeft = newscrollPosition;
  };
  // w- 386  h - 317

  return (
    <section className="w-full h-[600px] bg-[#F5F5F5] py-[80px] mb-[40px]">
      <Container className="relative h-full ">
        <div className="flex flex-col w-full h-full">
          <h2 className="text-center text-[32px] mb-[50px]">Our Feedback</h2>

          <div ref={containerRef} className="overflow-x-hidden w-full h-full">
            <div className={` w-[4300px] h-full flex gap-[23px]`}>
              {DataOurFeedback.map((item, index) => {
                return (
                  <ItemOurFeedback key={index} props={item}></ItemOurFeedback>
                );
              })}
            </div>
          </div>
          <span className="absolute top-[60%] left-0">
            <IconButtonCustom
              onClick={() => {
                handleSCR(-nextwidth);
              }}
            >
              <ChevronLeftIcon></ChevronLeftIcon>
            </IconButtonCustom>
          </span>
          <span className="absolute top-[60%] right-0">
            <IconButtonCustom
              onClick={() => {
                handleSCR(nextwidth);
              }}
              className=""
            >
              <ChevronRightIcon></ChevronRightIcon>
            </IconButtonCustom>
          </span>
        </div>
      </Container>
    </section>
  );
}

OurFeedBack.propTypes = {};

export default OurFeedBack;
