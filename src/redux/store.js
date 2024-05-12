import { configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import SidebarSlice from "./slices/SidebarSlice";
// import ProductCartSlice from "./slices/ProductCartSlice";
import ElementDomSlice from "./slices/ElementDomSlice";

export const store = configureStore({
  reducer: {
    responsive: ResponsiveSlice,
    Sidebar: SidebarSlice,
    // ProductCartSlice: ProductCartSlice,
    ElementDomSlice: ElementDomSlice,
  },
});
