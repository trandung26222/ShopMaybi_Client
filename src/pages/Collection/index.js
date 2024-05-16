import React, { useState, useEffect } from "react";
import BreadCrumb from "~/components/BreadCrumb";
import { Grid } from "@mui/material";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import LeftContent from "./LeftContent";
import TieuDeVaSapXep from "./TieuDeVaSapXep";
import ImgBackground from "./ImgBackground";
import { useSelector } from "react-redux";
import ContentPreview from "~/components/ContentPreview";

function Collection({ props }) {
  var CartPreview = useSelector((s) => s.ElementDomSlice.CartPreview);
  var CurrentProduct = useSelector((s) => s.CurrentProductSlice.CurrentProduct);
  var ProductData = useSelector((s) => s.ProductDataSlice.ProductData);

  var [tuychon, settuychon] = useState("default");
  var [FirstData, setFirstData] = useState([...ProductData]);
  var [Data, setData] = useState([...ProductData]);

  useEffect(() => {
    switch (tuychon) {
      case "default":
        setData((pre) => [...FirstData]);
        break;
      case "az":
        setData((prevData) =>
          [...prevData].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "za":
        setData((prevData) =>
          [...prevData].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case "giatangdan":
        setData((prevData) => [...prevData].sort((a, b) => a.gia - b.gia));
        break;
      case "giagiamdan":
        setData((prevData) => [...prevData].sort((a, b) => b.gia - a.gia));
        break;
      case "hangmoi":
        setData((pre) => [...FirstData]);
        break;
      default:
    }
  }, [tuychon]);

  return (
    <div className="w-full h-auto">
      {CartPreview && <ContentPreview CurrentProduct={CurrentProduct} />}
      <BreadCrumb
        links={["Trang chủ", "Danh mục"]}
        typography={props.nametypography}
      />

      <div className="w-full px-[var(--padding-header)] pt-5">
        {props.imgbackground && <ImgBackground props={props} />}

        <TieuDeVaSapXep
          settuychon={settuychon}
          nametypography={props.nametypography}
        />

        <div className="flex">
          <LeftContent />
          <div className="flex-1">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={2}
              justifyContent={"flex-start"}
            >
              {ProductData &&
                ProductData.map((i, index) => (
                  <Grid item key={index} lg={3} md={3} sm={4} xs={4}>
                    <ItemProduct props={i} option></ItemProduct>
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
