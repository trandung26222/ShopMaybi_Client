import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ItemOurFeedback from "./ItemOurFeedback";
import { useEffect } from "react";
import { DataOurFeedback } from "~/Data/DataOurFeedback";

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0.03)",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

function OurFeedBack(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const ItemRef = useRef();
  const TongWidthRef = useRef();
  const [widthItem, setWidthItem] = useState(0);
  const [TongWidth, setTongWidth] = useState(0);

  const handleSCR = (scrollAmount) => {
    var newscrollPosition = scrollPosition + scrollAmount;
    if (newscrollPosition <= 0) return;
    if (newscrollPosition >= TongWidth) return;
    setScrollPosition((pre) => {
      return newscrollPosition;
    });
    containerRef.current.scrollLeft = newscrollPosition;
  };

  useEffect(() => {
    const element = ItemRef.current;
    if (element) {
      const width = element.clientWidth;
      setWidthItem(width);
    }
    const element1 = TongWidthRef.current;
    if (element1) {
      const width1 = element1.clientWidth;
      setTongWidth(width1);
    }
  }, []);

  return (
    <section className=" w-full lg:h-[550px] xs:h-[400px] lg:py-[80px] xs:py-[53px]  mb-[40px] bg-[#F5F5F5]  ">
      <Container className="relative h-full ">
        <div className="flex flex-col w-full h-full">
          <h2 className="text-center text-[2.7em] mb-[50px]">Our Feedback</h2>

          <div ref={containerRef} className="overflow-x-hidden w-full h-full">
            <div
              ref={TongWidthRef}
              className={` xs:w-[2700px] md:w-[2800px] lg:w-[3097px] h-full flex justify-between`}
            >
              {DataOurFeedback.map((item, index) => {
                return (
                  <ItemOurFeedback
                    ref={ItemRef}
                    key={index}
                    props={item}
                  ></ItemOurFeedback>
                );
              })}
            </div>
          </div>
          <span className="absolute top-[60%] left-0">
            <IconButtonCustom
              onClick={() => {
                handleSCR(-widthItem);
              }}
            >
              <ChevronLeftIcon></ChevronLeftIcon>
            </IconButtonCustom>
          </span>
          <span className="absolute top-[60%] right-0">
            <IconButtonCustom
              onClick={() => {
                handleSCR(widthItem);
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


export default OurFeedBack;
