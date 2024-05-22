import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Container from "@mui/material/Container";
import OurFeedBack from "~/components/Feedback/OurFeedBack";

function Home(props) {
  return (
    <div className=" w-full h-fit ">
      <Section1 />
      <Container>
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
      <OurFeedBack />
    </div>
  );
}

export default Home;
