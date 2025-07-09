import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Button from "@mui/material/Button";

import React from "react";
import "./Header.css";
import Divider from "@mui/material/Divider";

function Header() {
  return (
    <>
      <Box className="header-bar">
        <Box>
          <Typography>Authentification</Typography>
        </Box>
        <Box>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Box>
       
      </Box>
      <Box>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        Home
      </Breadcrumbs>
      </Box>
      <Divider/>
    </>
  );
}

export default Header;
