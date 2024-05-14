import React, { useState, useEffect } from "react";
import BreadCrumb from "~/components/BreadCrumb";
import { Grid } from "@mui/material";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import LeftContent from "./LeftContent";
import TieuDeVaSapXep from "./TieuDeVaSapXep";
import { getDocs, collection } from "firebase/firestore";
import { db } from "~/firebase";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

function Collection({ props }) {
  var [tuychon, settuychon] = useState("default");
  var [FirstData, setFirstData] = useState([]);
  var [Data, setData] = useState([]);

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

  useEffect(() => {
    const findAll = async () => {
      const doc_refs = await getDocs(collection(db, "DataProducts"));

      const res = [];

      doc_refs.forEach((item) => {
        res.push({
          ...item.data(),
        });
      });
      setData(res);
      setFirstData(res);
    };
    findAll();
  }, []);

  return (
    <div className="w-full h-auto">
      <BreadCrumb
        links={["Trang chủ", "Danh mục"]}
        typography={props.nametypography}
      />
      <div className="w-full px-[var(--padding-header)] pt-5">
        {props.imgbackground && (
          <img
            src={props.imgbackground}
            alt=""
            className="object-contain w-full cursor-pointer mb-5
            hover:scale-[0.98] transition-transform duration-500 ease-in-out "
          />
        )}
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
              {Data &&
                Data.map((i, index) => (
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
