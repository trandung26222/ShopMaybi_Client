import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { DataProduct } from "../../components/Data/DataProduct";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ItemProduct from "../../components/ItemProduct/ItemProduct";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#696969",
  border: "0.7px solid #696969",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Mulish",
  height: "45px",
  boxShadow: " 0 0 0 0 rgba(0, 0, 0, 0)",
  "&:hover": {
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
}));

function Section4() {
  return (
    <section>
      <h2 className="text-[var(--text-color)] text-[2.7em] m-0 line mb-10 ">
        <Link>NEW ARRIVAL - MAYBI's back</Link>
      </h2>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        justifyContent={"flex-center"}
      >
        {DataProduct.map((i, index) => (
          <Grid item key={index} lg={2.4} md={3} sm={3} xs={4}>
            <ItemProduct props={i}></ItemProduct>
          </Grid>
        ))}
      </Grid>

      <div className="w-full h-full my-10 text-center mb-12">
        <ColorButton variant="contained" endIcon={<ChevronRightIcon />}>
          Xem tất cả
        </ColorButton>
      </div>

      <div className="mb-12">
        <img
          src="https://theme.hstatic.net/1000341902/1001140246/14/imgtext_1_img.jpg?v=755"
          alt=""
        />
      </div>
    </section>
  );
}

Section4.propTypes = {};

export default Section4;

/*

*/
