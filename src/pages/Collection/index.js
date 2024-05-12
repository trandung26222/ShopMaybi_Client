import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Grid } from "@mui/material";
import { DataProduct } from "../../components/Data/DataProduct";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LeftContent from "./LeftContent";

function Collection({ props }) {
  return (
    <div className="w-full h-auto">
      <BreadCrumb
        links={["Trang chủ", "Danh mục"]}
        typography={props.nametypography}
      />
      <div className="w-full px-[var(--padding-header)] pt-5">
        {props.id === 0 && (
          <img
            src="https://file.hstatic.net/1000341902/collection/homepage_2000x679-100_b263dd31246e43a7834da5e13f3326ad.jpg"
            alt=""
            className="object-contain w-full cursor-pointer mb-5
            hover:scale-[0.98] transition-transform duration-500 ease-in-out "
          />
        )}
        <h2 className="text-[2.5em] mb-4">{props.nametypography}</h2>
        <div className="flex">
          <LeftContent />
          <div className="flex-1">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={2}
              justifyContent={"flex-start"}
            >
              {DataProduct.map((i, index) => (
                <Grid item key={index} lg={3} md={3} sm={4} xs={4}>
                  <ItemProduct props={i}></ItemProduct>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
