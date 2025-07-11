import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Box from "@mui/material/Box";

import "./Form.css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";

function Form() {
  const [toggleValue, setToggleValue] = useState("ldap");
  const [inputFieldError, setInputFieldError] = useState({
    authentificationName: {
      value: "",
      error: false,
    },
    serverName: {
      value: "",
      error: false,
    },
    ldapUser: {
      value: "",
      error: false,
    },
    baseDN: {
      value: "",
      error: false,
    },
    userBaseDN: {
      value: "",
      error: false,
    },
    bindUser: {
      value: "",
      error: false,
    },
    userKey: {
      value: "",
      error: false,
    },
    groupDbMatch: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    userGroup: {
      value: "",
      error: false,
    },
  });

  const handleChangeToggle = (event, newAlignment) => {
    console.log("alignment", newAlignment, event);
    setToggleValue(newAlignment);
  };

  const handleTextfieldChange = (e, propertyKey) => {
    console.log("prop", propertyKey);
    const value = e.target.value;
    let error;

    console.log("e.target.validity.valid", e.target.validity.valid);

    if (e.target.validity.valid) {
      error = false;
    } else {
      error = true;
    }

    const final = {
      ...inputFieldError,
      [propertyKey]: {
        value: value,
        error: error,
      },
    };

    console.log("final", final);

    setInputFieldError(final);
  };

  return (
    <>
      <form>
        <FormGroup>
          <TextField
            required
            label="Authentification Name"
            value={inputFieldError.authentificationName.value}
            error={inputFieldError.authentificationName.error}
            variant="outlined"
            size="small"
            sx={{ width: "50%" }}
            onChange={(e) => handleTextfieldChange(e, "authentificationName")}
            InputLabelProps={{ shrink: true }}
            helperText={
              inputFieldError.authentificationName.error
                ? "Only letters and spaces allowed (2-50 characters)"
                : ""
            }
            inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
          />

          <label className="authentification-lbl">Authentification type</label>
          <Box className="authentification-type">
            <CheckCircleRoundedIcon className="checked-icon" />
            <label className="remote-lbl"> Remote</label>
            <ToggleButtonGroup
              color="primary"
              value={toggleValue}
              exclusive
              onChange={handleChangeToggle}
              aria-label="Platform"
              className="toggle-btn-grp"
            >
              <ToggleButton
                value="active-directory"
                className={
                  toggleValue === "active-directory"
                    ? "active-directory-btn p-5"
                    : "active-directory-btn-inactive p-5 "
                }
                sx={{ textTransform: "none" }}
              >
                Active Directory
              </ToggleButton>
              <ToggleButton
                value="ldap"
                className={
                  toggleValue === "ldap"
                    ? "ldap-btn p-5"
                    : "ldap-btn-inactive p-5"
                }
              >
                LDAP
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box className="text-field-checkbox">
            <TextField
              id="outlined-basic"
              label="Authentification Option"
              variant="outlined"
              sx={{ width: "75%" }}
              InputLabelProps={{ shrink: true }}
            />
            <span className="checkbox-control1">
              <Checkbox />
              <label>Encrypted communication(SSL)</label>
              <p className="sample-text">Sample text</p>
            </span>
            <span className="checkbox-control2">
              <Checkbox />
              <label>Authentification Validated</label>
            </span>
          </Box>
          <Box className="remote-configuration">
            <label>Remote Configuration(LDAP)</label>
            <hr></hr>
            <Box className="textfield-container-row-one">
              <TextField
                label="Server name"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.serverName.value}
                onChange={(e) => handleTextfieldChange(e, "serverName")}
                error={inputFieldError.serverName.error}
                helperText={
                  inputFieldError.serverName.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />

              <TextField
                label="LDAP User"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.ldapUser.value}
                onChange={(e) => handleTextfieldChange(e, "ldapUser")}
                error={inputFieldError.ldapUser.error}
                helperText={
                  inputFieldError.ldapUser.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />

              <TextField
                label="Password"
                variant="outlined"
                className="textfield-group"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  pattern:
                    "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@.#$!%*?&])[A-Za-zd@.#$!%*?&].{8,15}$/",
                }}
                value={inputFieldError.password.value}
                onChange={(e) => handleTextfieldChange(e, "password")}
                error={inputFieldError.password.error}
                helperText={
                  inputFieldError.password.error
                    ? "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters."
                    : ""
                }
              />
            </Box>
            <Box className="textfield-container-row-one">
              <TextField
                label="Certificate"
                variant="outlined"
                className="certificate-textfield"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box className="textfield-container-row-one">
              <TextField
                label="Base DN"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.baseDN.value}
                onChange={(e) => handleTextfieldChange(e, "baseDN")}
                error={inputFieldError.baseDN.error}
                helperText={
                  inputFieldError.baseDN.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />

              <TextField
                label="User Base DN"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.userBaseDN.value}
                onChange={(e) => handleTextfieldChange(e, "userBaseDN")}
                error={inputFieldError.userBaseDN.error}
                helperText={
                  inputFieldError.userBaseDN.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />
              <TextField
                label="Bind User"
                variant="outlined"
                className="textfield-group"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.bindUser.value}
                onChange={(e) => handleTextfieldChange(e, "bindUser")}
                error={inputFieldError.bindUser.error}
                helperText={
                  inputFieldError.bindUser.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />
            </Box>
            <Box className="textfield-container-row-one">
              <TextField
                label="User Key"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.userKey.value}
                onChange={(e) => handleTextfieldChange(e, "userKey")}
                error={inputFieldError.userKey.error}
                helperText={
                  inputFieldError.userKey.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />

              <TextField
                label="Group DB Match"
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.groupDbMatch.value}
                onChange={(e) => handleTextfieldChange(e, "groupDbMatch")}
                error={inputFieldError.groupDbMatch.error}
                helperText={
                  inputFieldError.groupDbMatch.error
                    ? "Only letters and spaces allowed (2-50 characters)"
                    : ""
                }
              />
            </Box>
          </Box>
          <Box className="user-control">
            <label>Allow All Users</label>
            <Box className="allow-user-container">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="radio-btn-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio className="p-2" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio className="p-2" />}
                  label="No"
                />
                <TextField
                  select
                  className="user-selection-dropdown"
                  size="small"
                  label="User Group"
                  required
                  InputLabelProps={{ shrink: true }}
                >
                  <MenuItem value="User1">User1</MenuItem>
                </TextField>

                <Tooltip
                  title="All user is allowed to connect"
                  placement="right"
                >
                  <InfoIcon className="info-icon" />
                </Tooltip>
              </RadioGroup>
              <Box className="user-auto-creation-container">
                <Checkbox className="p-5" />
                <label>User Auto Creation</label>
              </Box>
              <Box className="user-reference-container">
                <label>Use a reference user for the creation</label>
                <FormControlLabel
                  value="yes"
                  control={<Radio className="p-2" />}
                  label="Yes"
                  className="user-reference-radio-btn"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio className="p-2" />}
                  label="No"
                  className="user-reference-radio-btn"
                />
                <Box className="selection-dropdown">
                  <Select size="small" className="user-selection-dropdown">
                    <MenuItem></MenuItem>
                  </Select>
                  <Tooltip
                    title="All user is allowed to connect"
                    placement="right"
                  >
                    <InfoIcon className="info-icon" />
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Box>
        </FormGroup>
      </form>
    </>
  );
}
export default Form;
