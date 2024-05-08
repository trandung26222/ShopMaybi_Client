import React from "react";
import PropTypes from "prop-types";

function Item({ item }) {
  return <div className="w-[345px] h-[full] bg-white  rounded-lg">{item}</div>;
}

Item.propTypes = {};

export default Item;
