import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "../Components/NavBar.css";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  return (
    <Box>
      <AppBar>
        <Toolbar className="nav-bar">
          <Box className="nav-items">
            <Select className="select-dropdown">
              <MenuItem>Add</MenuItem>
            </Select>
            <Button color="inherit">
              <InfoOutlinedIcon />
            </Button>
            <Button color="inherit" className="notify">
              <NotificationsIcon className="notify-icon" />
            </Button>
            <Button>
              <Avatar className="avatar">H</Avatar>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
