import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

function Login() {
  return (
    <div className="w-full h-[300px] bg-green-100">
      <div className="h-[32px] w-full px-[var(--padding-header)]">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            culpa!
          </Link>
          <Typography color="text.primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            nemo iste reprehenderit nisi consequuntur officia laudantium debitis
            officiis, molestiae magnam.
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Login;
