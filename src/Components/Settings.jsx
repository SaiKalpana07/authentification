import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Form from "./Form";
import './Settings.css'
import SideNav from "./SideNav";

function Settings() {
  return (
    <>
      <div className="row container">
        <div className="left-container">
          <SideNav />
        </div>
        <div className="right-container">
          <div className="row navbar"><NavBar/></div>
          <div className="row header"><Header/></div>
          <div className="row form"><Form /></div>
        </div>
      </div>
    </>
  );
}

export default Settings;
