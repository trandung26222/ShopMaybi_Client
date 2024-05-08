import { createSlice } from "@reduxjs/toolkit";

var initState = {
  Sidebar: false,
};

export const SidebarSlice = createSlice({
  name: "SidebarSlice",
  initialState: initState,
  reducers: {
    toggleSidebar: (state) => {
      state.Sidebar = !state.Sidebar;
    },
  },
});

export const { toggleSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
