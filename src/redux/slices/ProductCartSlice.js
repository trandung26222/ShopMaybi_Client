import { createSlice } from "@reduxjs/toolkit";
import { CartItemData } from "../../components/Data/CartItemData";

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
  CartItemData: [...CartItemData],
  tonggia: calculateTotalPrice(CartItemData),
  soluongsanpham: calculateTotalQuantity(CartItemData),
};
localStorage.setItem("CartItemData", JSON.stringify(CartItemData));

export const ProductCartSlice = createSlice({
  name: "ProductCartSlice",
  initialState: initState,
  reducers: {},
});

export const {} = ProductCartSlice.actions;
export default ProductCartSlice.reducer;
