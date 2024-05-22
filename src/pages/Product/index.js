import React from "react";
import BreadCrumb from "~/components/BreadCrumb";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Product(props) {
  var Product = JSON.parse(localStorage.getItem("Product"));

  return (
    <div className="w-full h-auto">
      <BreadCrumb links={["Trang chủ", "Áo"]} typography={Product.title} />

      <div className="w-full px-[var(--padding-header)] pt-6 ">
        <Grid container>
          <Grid xs={5}>
            <LeftContent Product={Product} />
          </Grid>
          <Grid xs={7}>
            <RightContent Product={Product} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Product;
