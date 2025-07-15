import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import "./Header.css";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import * as api from "../api";

function Header({ triggerFormValidation, data }) {
  const handleSaveClick = () => {
    triggerFormValidation();
    let payload = JSON.parse(JSON.stringify(data));

    api.saveData(payload).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <>
      <Box className="header-bar">
        <Box className="header-title">
          <Box className="header-items">
            <ArrowBackIcon className="back-arrow-icon" />
            <Typography
              className="heading"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Authentification
            </Typography>
          </Box>

          <Box className="bread-crumb-container">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                <HomeIcon className="home-icon" />
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className="bread-crumb-link"
              >
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className="bread-crumb-link"
              >
                Settings
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>
        <Box className="button-container">
          <Box className="save-cancel-btn">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#3f42a1",
                color: "#3f42a1",
                borderRadius: "0",
                textTransform: "none",
              }}
              className="cancel-btn"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f42a1",
                borderRadius: "0",
                textTransform: "none",
              }}
              className="save-btn"
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default Header;
