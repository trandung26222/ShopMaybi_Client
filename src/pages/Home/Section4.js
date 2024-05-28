import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import { useSelector } from "react-redux";

function Section4() {
  var Products = useSelector((s) => s.ProductSlice.Products);
  return (
    <section>
      <h2 className="text-[var(--text-color)] text-[2.7em] m-0 line mb-10 ">
        <Link>NEW ARRIVAL - MAYBI's back</Link>
      </h2>

      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        justifyContent={"flex-center"}
      >
        {Products.map((i) => (
          <Grid item key={i._id} lg={2.4} md={3} sm={3} xs={4}>
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

export default Section4;

/*

*/
