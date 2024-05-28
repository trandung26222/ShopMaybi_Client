import React, { useState, useEffect } from "react";
import BreadCrumb from "~/components/BreadCrumb";
import { Grid } from "@mui/material";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import LeftContent from "./LeftContent";
import TieuDeVaSapXep from "./TieuDeVaSapXep";
import ImgBackground from "./ImgBackground";
import { useSelector } from "react-redux";
import ContentPreview from "~/pages/Collection/ContentPreview";
import { statusFetch } from "~/utils/statusFetch";
import { valuefiletermucgia } from "~/Data/DataCollectionFilter";
import Loading from "~/components/Loading";

function Collection({ props }) {
  var CartPreview = useSelector((s) => s.ElementDomSlice.CartPreview);
  var CurrentProduct = useSelector((s) => s.CurrentProductSlice.CurrentProduct);
  var Products = useSelector((s) => s.ProductSlice.Products);
  var statusFetchProduct = useSelector((s) => s.ProductSlice.status);
  var [arrCheck, setarrCheck] = useState([]);
  var [tuychon, settuychon] = useState("default");
  var [Data, setData] = useState([]);

  useEffect(() => {
    switch (tuychon) {
      case "default":
        setData((pre) => [...Products]);
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
        setData((pre) => [...Products]);
        break;
      case "filterCost":
        setData(
          Data.filter((product) => {
            for (var check in arrCheck) {
              var [minPrice, maxPrice] = check;
              if (product.gia >= minPrice && product.gia <= maxPrice) {
                return true;
              }
            }
            return false;
          })
        );
        break;
      default:
    }
  }, [tuychon]);
  useEffect(() => {
    setData((pre) => [...Products]);
  }, [Products]);

  useEffect(() => {
    arrCheck.forEach((index) => {
      console.log(valuefiletermucgia[index]);
    });
  }, [arrCheck]);

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
          <LeftContent settuychon={settuychon} setarrCheck={setarrCheck} />
          <div className="flex-1">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={3}
              justifyContent={"flex-start"}
            >
              {statusFetchProduct === statusFetch.LOADING && <Loading />}
              {Data &&
                Data.map((i, index) => (
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
