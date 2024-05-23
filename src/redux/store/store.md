import { configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import ElementDomSlice from "./slices/ElementDomSlice";
import CurrentUserSlice from "./slices/CurrentUserSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";
import CurrentCartSlice from "./slices/CurrentCartSlice";
import ProductDataSlice from "./slices/ProductDataSlice";

export const store = configureStore({
reducer: {
responsive: ResponsiveSlice,
ElementDomSlice: ElementDomSlice,
CurrentUserSlice: CurrentUserSlice,
CurrentProductSlice: CurrentProductSlice,
CurrentCartSlice: CurrentCartSlice,
ProductDataSlice: ProductDataSlice,
},
});
