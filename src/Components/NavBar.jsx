import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../Components/NavBar.css";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function NavBar() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];
  return (
    <Box>
      <AppBar>
        <Toolbar className="nav-bar">
          <Box className="nav-items">
            {/* <TextField className="user-resource" select label="Resource" InputLabelProps={{shrink:true}}>
            <MenuItem value="User1">
              <ListItemIcon>
                <Avatar/>
              </ListItemIcon>
              <ListItemText primary="User"/>
              </MenuItem>
            </TextField> */}
              
            <Autocomplete
              className="select-dropdown"
              freeSolo
              id="free-solo-2-demo"
              size="small"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  className="auto-complete-textbox"
                  sx={{
                    "& .MuiInputLabel-outlined": {
                      color: "#3f42a1",
                    },
                  }}
                  {...params}
                  label="Search input"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />

            <InfoOutlinedIcon />
            <NotificationsIcon className="notify-icon" />
            <Avatar className="avatar">H</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
