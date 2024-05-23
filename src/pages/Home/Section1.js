import React from "react";
import { Carousel } from "antd";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";
import { statusFetch } from "~/utils/statusFetch";

function Section1(props) {
  var statusFetchDataProduct = useSelector((s) => s.ProductDataSlice.status);
  var backgroundimg = [
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_3.jpg?v=754",
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_1.jpg?v=763",
  ];

  return (
    <section className="flex flex-col">
      {statusFetchDataProduct === statusFetch.LOADING && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

      <Carousel autoplay effect="fade" autoplaySpeed={2000}>
        {backgroundimg.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="" className="cursor-pointer" />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Section1;
