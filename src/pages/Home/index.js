import React from "react";
import PropTypes from "prop-types";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Container from "@mui/material/Container";
import OurFeedBack from "./OurFeedBack";

function Home(props) {
  return (
    <div className=" w-full h-fit ">
      <section>
        <img
          src="https://theme.hstatic.net/1000341902/1001140246/14/slider_3.jpg?v=754"
          alt=""
        />
      </section>
      <Container>
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
      <OurFeedBack />
    </div>
  );
}

Home.propTypes = {};

export default Home;
