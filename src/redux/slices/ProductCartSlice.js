import { createSlice } from "@reduxjs/toolkit";
import { DataCart } from "~/Data/DataCart";

const calculateTotalPrice = (cartItems) => {
  var tmp = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  localStorage.setItem("tonggia", tmp);
  return tmp;
};
const calculateTotalQuantity = (cartItems) => {
  var tmp = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);
  localStorage.setItem("soluongsanpham", tmp);

  return tmp;
};

const initState = {
  DataCart: [...DataCart],
  tonggia: calculateTotalPrice(DataCart),
  soluongsanpham: calculateTotalQuantity(DataCart),
};
localStorage.setItem("DataCart", JSON.stringify(DataCart));

export const ProductCartSlice = createSlice({
  name: "ProductCartSlice",
  initialState: initState,
  reducers: {},
});

export const {} = ProductCartSlice.actions;
export default ProductCartSlice.reducer;
