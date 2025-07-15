import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Form from "./Form";
import "./Settings.css";
import SideNav from "./SideNav";
import { useRef } from "react";

function Settings() {
  const ref = useRef();
  const [data, setData] = useState();

  const triggerFormValidation = () => {
    ref.current.formValidation();
  };

  return (
    <>
      <div className="row container">
        <div className="left-container">
          <SideNav />
        </div>
        <div className="right-container">
          <div className="row navbar">
            <NavBar />
          </div>
          <div className="row header">
            <Header triggerFormValidation={triggerFormValidation} data={data} />
          </div>
          <div className="row form">
            <Form ref={ref} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
