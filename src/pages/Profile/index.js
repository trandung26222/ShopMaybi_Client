import React from "react";
import BreadCrumb from "~/components/BreadCrumb";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { ProfileProvider } from "~/Context/ProfileContext";

function Profile() {
  return (
    <ProfileProvider>
      <div className="w-full h-auto">
        <BreadCrumb links={["Trang chủ"]} typography={"Thông tin tài khoản"} />
        <div className="h-auto bg-[white] w-full px-[calc(var(--padding-header)+60px)] py-6">
          <Grid container>
            <Grid xs={3} className="">
              <Sidebar />
            </Grid>
            <Grid xs={9}>
              <Content />
            </Grid>
          </Grid>
        </div>
      </div>
    </ProfileProvider>
  );
}

export default Profile;
