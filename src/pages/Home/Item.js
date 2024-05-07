import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return <div className="h-6 border">{props.item}</div>;
}

Item.propTypes = {};

export default Item;
