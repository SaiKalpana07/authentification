import React from "react";
import ReactDOM from "react-dom/client";
import SideNav from "./Components/SideNav";
import Form from "./Components/Form";
import "./style.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";


ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <div className="row container">
      <div className="left-container">
        <SideNav />
      </div>
      <div className="right-container">
        <div className="row navbar">
          <NavBar/>
        </div>
        <div className="row header">
          <Header/>
        </div>
        <div className="row form">
          <Form />
        </div>
      </div>
    </div>
  </>
);
