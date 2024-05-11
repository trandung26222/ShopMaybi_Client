import React from "react";
import { useLocation } from "react-router-dom";

function Product(props) {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <div>
      <p>Current URL: {currentURL}</p>
      <div>Product</div>
    </div>
  );
}

export default Product;
