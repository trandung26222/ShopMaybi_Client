import React, { useState, useEffect } from "react";
import BreadCrumb from "~/components/BreadCrumb";
import { Grid } from "@mui/material";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import LeftContent from "./LeftContent";
import TieuDeVaSapXep from "./TieuDeVaSapXep";
import ImgBackground from "./ImgBackground";
import { useSelector } from "react-redux";
import ContentPreview from "~/components/ContentPreview";
import { statusFetch } from "~/utils/statusFetch";
import CircularProgress from "@mui/material/CircularProgress";

function Collection({ props }) {
  var CartPreview = useSelector((s) => s.ElementDomSlice.CartPreview);
  var CurrentProduct = useSelector((s) => s.CurrentProductSlice.CurrentProduct);
  var ProductData = useSelector((s) => s.ProductDataSlice.ProductData);
  var statusFetchProduct = useSelector((s) => s.ProductDataSlice.status);

  var [tuychon, settuychon] = useState("default");
  var [Data, setData] = useState([]);

  useEffect(() => {
    switch (tuychon) {
      case "default":
        setData((pre) => [...ProductData]);
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
        setData((pre) => [...ProductData]);
        break;
      default:
    }
  }, [tuychon]);
  useEffect(() => {
    setData((pre) => [...ProductData]);
  }, [ProductData]);

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
              {statusFetchProduct === statusFetch.LOADING && (
                <div className="flex justify-center w-full mt-6 mb-6">
                  <CircularProgress size={18} sx={{ color: "gray" }} />
                  <p className="ml-4 text-[1.4em]">Đang tải dữ liệu...</p>
                </div>
              )}
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
