import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumb({ links, typography }) {
  return (
    <div className="  h-[38px] w-full px-[var(--padding-header)] flex items-center bg-[#F6F6F6] ">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              underline="hover"
              href="/"
              sx={{
                fontFamily: "Mulish",
                fontSize: "0.8em",
                color: "#2F80ED",
              }}
            >
              {link}
            </Link>
          );
        })}

        <Typography
          color="rgba(0,0,0,0.5)"
          fontSize={"0.8em"}
          fontFamily={"Mulish"}
        >
          {typography}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

BreadCrumb.propTypes = {};

export default BreadCrumb;
