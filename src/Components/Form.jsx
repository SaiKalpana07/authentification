import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "./Form.css";
import "../../src/style.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import * as api from "../api"
import { getUsers } from "../api";
import { AUTHENTIFICATION_LBL, AUTHENTIFICATION_NAME, AUTHENTIFICATION_OPTION, BASE_DN_LBL, BIND_USER, CERTIFICATE, GROUP_DB_MATCH, LDAP, LDAP_USER_LBL, PASSWORD, PASSWORD_ERROR_MESSAGE, SERVER_NAME_LBL,SERVER_NAME, TEXTFIELD_ERROR_MESSAGE, TOGGLE_BUTTON_VALUE, TOOLTIP_TITLE, USER_BASE_DN_LBL, USER_GROUP_LBL, USER_KEY_LBL, USER_REFERENCE_LBL, LDAP_USER, PASSWORD_LBL, CERTIFICATE_LBL, BIND_USER_LBL, GROUP_DB_MATCH_LBL, BASE_DN, USER_BASE_DN, USER_KEY, ACTIVE_DIRECTORY } from "../constants";

const Form = forwardRef((props, ref) => {console.log('props',props.setData)
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
    toggleButtonValue: {
      value: "",
      error: false,
    },
  });
console.log(getUsers().then((response) => {console.log(response,'check')}))
  // console.log(getUsers().then((response) => {console.log(response.json())}))

  useImperativeHandle(ref, () => ({
    formValidation: () => {
      const updatedData = structuredClone(inputFieldError);
      let propertyKeyValues = Object.keys(updatedData);
      propertyKeyValues.map((prop) => {
        if (updatedData[prop].value == "") {
          updatedData[prop].error = true;
        }
      });
      setInputFieldError(updatedData);
      props.setData(inputFieldError);
    },
  }));

  const handleToggleClick = (e, propertyKey, value) => {
    const final = {
      ...inputFieldError,
      [propertyKey]: {
        value: value,
        error: false,
      },
    };
    setInputFieldError(final);
  };

  const handleTextfieldChange = (e, propertyKey) => {
    const value = e.target.value;
    let error;

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

    setInputFieldError(final);
  };

  return (
    <>
      <form>
        <FormGroup>
          <TextField
            required
            label= {AUTHENTIFICATION_LBL}
            value={inputFieldError.authentificationName.value}
            error={inputFieldError.authentificationName.error}
            variant="outlined"
            size="small"
            sx={{
              width: "50%",
              "& .MuiInputLabel-outlined": {
                color: "#3f42a1",
                "& .MuiInputLabel-asterisk": { color: "red" },
              },
            }}
            onChange={(e) => handleTextfieldChange(e,AUTHENTIFICATION_NAME )}
            InputLabelProps={{ shrink: true }}
            helperText={
              inputFieldError.authentificationName.error
                ? TEXTFIELD_ERROR_MESSAGE
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
              aria-label="Platform"
              className="toggle-btn-grp"
            >
              <ToggleButton
                value={ACTIVE_DIRECTORY}
                className={
                  inputFieldError.toggleButtonValue.value === ACTIVE_DIRECTORY
                    ? "active-directory-btn p-5"
                    : "active-directory-btn-inactive p-5 "
                }
                sx={{ textTransform: "none" }}
                onClick={(e) =>
                  handleToggleClick(e, TOGGLE_BUTTON_VALUE, ACTIVE_DIRECTORY)
                }
              >
                Active Directory
              </ToggleButton>
              <ToggleButton
                value="ldap"
                className={
                  inputFieldError.toggleButtonValue.value === LDAP
                    ? "ldap-btn p-5"
                    : "ldap-btn-inactive p-5"
                }
                onClick={(e) =>
                  handleToggleClick(e, TOGGLE_BUTTON_VALUE, LDAP)
                }
              >
                LDAP
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box className="text-field-checkbox">
            <TextField
              required
              id="outlined-basic"
              label={AUTHENTIFICATION_OPTION}
              variant="outlined"
              sx={{
                width: "75%",
                "& .MuiInputLabel-outlined": {
                  color: "#3f42a1",
                  "& .MuiInputLabel-asterisk": { color: "red" },
                },
              }}
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
                required
                label= {SERVER_NAME_LBL}
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.serverName.value}
                onChange={(e) => handleTextfieldChange(e, SERVER_NAME )}
                error={inputFieldError.serverName.error}
                helperText={
                  inputFieldError.serverName.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />

              <TextField
                required
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                label={LDAP_USER_LBL}
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.ldapUser.value}
                onChange={(e) => handleTextfieldChange(e, LDAP_USER )}
                error={inputFieldError.ldapUser.error}
                helperText={
                  inputFieldError.ldapUser.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />

              <TextField
                required
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                label={PASSWORD_LBL}
                variant="outlined"
                className="textfield-group"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  pattern: "^[a-zA-Z ]{2,50}$",
                }}
                value={inputFieldError.password.value}
                onChange={(e) => handleTextfieldChange(e,PASSWORD )}
                error={inputFieldError.password.error}
                helperText={
                  inputFieldError.password.error
                    ? PASSWORD_ERROR_MESSAGE
                    : ""
                }
              />
            </Box>
            <Box className="textfield-container-row-one">
              <TextField
                required
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                label={CERTIFICATE_LBL}
                variant="outlined"
                className="certificate-textfield"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box className="textfield-container-row-one">
              <TextField
                required
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                label={BASE_DN_LBL}
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.baseDN.value}
                onChange={(e) => handleTextfieldChange(e, BASE_DN)}
                error={inputFieldError.baseDN.error}
                helperText={
                  inputFieldError.baseDN.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />

              <TextField
                label={USER_BASE_DN_LBL}
                variant="outlined"
                className="textfield-group mr-2"
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                  },
                }}
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.userBaseDN.value}
                onChange={(e) => handleTextfieldChange(e, USER_BASE_DN)}
                error={inputFieldError.userBaseDN.error}
                helperText={
                  inputFieldError.userBaseDN.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />
              <TextField
                required
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                    "& .MuiInputLabel-asterisk": { color: "red" },
                  },
                }}
                label={BIND_USER_LBL}
                variant="outlined"
                className="textfield-group"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.bindUser.value}
                onChange={(e) => handleTextfieldChange(e, BIND_USER)}
                error={inputFieldError.bindUser.error}
                helperText={
                  inputFieldError.bindUser.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />
            </Box>
            <Box className="textfield-container-row-one">
              <TextField
                label={USER_KEY_LBL}
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                  },
                }}
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.userKey.value}
                onChange={(e) => handleTextfieldChange(e,USER_KEY )}
                error={inputFieldError.userKey.error}
                helperText={
                  inputFieldError.userKey.error
                    ? TEXTFIELD_ERROR_MESSAGE
                    : ""
                }
              />

              <TextField
                label= {GROUP_DB_MATCH_LBL}
                variant="outlined"
                className="textfield-group mr-2"
                size="small"
                sx={{
                  "& .MuiInputLabel-outlined": {
                    color: "#3f42a1",
                  },
                }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ pattern: "^[a-zA-Z ]{2,50}$" }}
                value={inputFieldError.groupDbMatch.value}
                onChange={(e) => handleTextfieldChange(e,GROUP_DB_MATCH )}
                error={inputFieldError.groupDbMatch.error}
                helperText={
                  inputFieldError.groupDbMatch.error
                    ? TEXTFIELD_ERROR_MESSAGE
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
                  sx={{
                    "& .MuiInputLabel-outlined": {
                      color: "#3f42a1",
                    },
                  }}
                  className="user-selection-dropdown"
                  size="small"
                  label= {USER_GROUP_LBL}
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
                  <TextField
                    select
                    sx={{
                      "& .MuiInputLabel-outlined": {
                        color: "#3f42a1",
                      },
                    }}
                    className="user-selection-dropdown"
                    size="small"
                    label= {USER_REFERENCE_LBL}
                    InputLabelProps={{ shrink: true }}
                  >
                    <MenuItem value="User1">User1</MenuItem>
                  </TextField>

                  <Tooltip
                    title= {TOOLTIP_TITLE}
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
});
export default Form;
