import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { DataCollection } from "../../components/Data/DataCollection";

function Collection() {
  const { name } = useParams();
  var thislink = "/collections/" + name;
  let nametypography = null;
  for (const item of DataCollection) {
    if (item.link === thislink) {
      nametypography = item.nametypography;
      break;
    }
  }

  return (
    <div className="w-full h-auto">
      <BreadCrumb
        links={["Trang chủ", "Danh mục"]}
        typography={nametypography}
      />
      <div className="">{}</div>
    </div>
  );
}

export default Collection;
