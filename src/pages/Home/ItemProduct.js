import React from "react";
import PropTypes from "prop-types";

function ItemProduct(props) {
  return (
    <div className="w-full bg-green-100 h-[auto] flex flex-col">
      {/* nen img */}
      <div className="bg-white border w-full h-[324px] shadow ">
        <img
          src="https://product.hstatic.net/1000341902/product/2404wo23_grey__12__18c1d3d090fd40bcbf0abd9a7e4804be_large.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

ItemProduct.propTypes = {};

export default ItemProduct;
