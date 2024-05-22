import React from "react";
import { Carousel } from "antd";

function Section1(props) {
  var backgroundimg = [
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_3.jpg?v=754",
    "https://theme.hstatic.net/1000341902/1001140246/14/slider_1.jpg?v=763",
  ];

  return (
    <section>
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
