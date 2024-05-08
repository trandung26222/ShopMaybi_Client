import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import SidebarSlice from "./slices/SidebarSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    responsive: ResponsiveSlice,
    Sidebar: SidebarSlice,
  },
});
// store đại diện cho redux
