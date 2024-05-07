import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Item from "./Item";
import ItemProduct from "./ItemProduct";
import { ProductData } from "./ProductData";

function Section4() {
  return (
    <section>
      <h2 className="text-[var(--text-color)] text-3xl m-0 line mb-10">
        <Link>NEW ARRIVAL - MAYBI's back</Link>
      </h2>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        justifyContent={"flex-start"}
      >
        {ProductData.map((item, index) => (
          <Grid item key={index} lg={2.4} md={4} sm={5} xs={12}>
            <ItemProduct props={item}></ItemProduct>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

Section4.propTypes = {};

export default Section4;

/*

*/
