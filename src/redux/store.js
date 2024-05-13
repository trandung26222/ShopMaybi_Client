import { configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
// import ProductCartSlice from "./slices/ProductCartSlice";
import ElementDomSlice from "./slices/ElementDomSlice";

export const store = configureStore({
  reducer: {
    responsive: ResponsiveSlice,
    // ProductCartSlice: ProductCartSlice,
    ElementDomSlice: ElementDomSlice,
  },
});
