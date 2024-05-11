import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumb({ links, typography }) {
  return (
    <div className="h-[38px] w-full px-[var(--padding-header)] flex items-center bg-[#F6F6F6]">
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              underline="hover"
              href="/"
              sx={{
                fontSize: "14px",
                color: "#2F80ED",
                letterSpacing: "0.02em",
              }}
            >
              {link}
            </Link>
          );
        })}

        <Typography color="gray" letterSpacing={"0.02em"} fontSize={"14px"}>
          {typography}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

BreadCrumb.propTypes = {};

export default BreadCrumb;
