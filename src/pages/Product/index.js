import React, { useEffect } from "react";
import BreadCrumb from "~/components/BreadCrumb";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductByID } from "~/CallAPI/product";
import { isEmpty } from "lodash";

function Product() {
  var { id } = useParams();
  var disp = useDispatch();
  useEffect(() => {
    disp(getProductByID(id));
  }, []);
  var ProductPage = useSelector((s) => s.ProductSlice.ProductPage);

  return (
    <>
      {!isEmpty(ProductPage) && (
        <div className="w-full h-auto">
          <BreadCrumb
            links={["Trang chủ", "Áo"]}
            typography={ProductPage.title}
          />

          <div className="w-full px-[var(--padding-header)] pt-6 ">
            <Grid container>
              <Grid xs={5}>
                <LeftContent Product={ProductPage} />
              </Grid>
              <Grid xs={7}>
                <RightContent Product={ProductPage} />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
