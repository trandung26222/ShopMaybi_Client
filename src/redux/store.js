import { configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
// import ProductCartSlice from "./slices/ProductCartSlice";
import ElementDomSlice from "./slices/ElementDomSlice";
import CurrentUserSlice from "./slices/CurrentUserSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";

export const store = configureStore({
  reducer: {
    responsive: ResponsiveSlice,
    // ProductCartSlice: ProductCartSlice,
    ElementDomSlice: ElementDomSlice,
    CurrentUserSlice: CurrentUserSlice,
    CurrentProductSlice: CurrentProductSlice,
  },
});
