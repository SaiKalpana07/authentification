import React from "react";
import ReactDOM from "react-dom/client";
import SideNav from "./Components/SideNav";
import Form from "./Components/Form";
import "./style.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Analytics from "./Components/Analytics";
import Search from "./Components/Search";
import Work from "./Components/Work";
import Notification from "./Components/Notification";
import Settings from "./Components/Settings";
import Task from "./Components/Task";
import Logout from "./Components/Logout";
import PageNotFound from "./Components/PageNotFound";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <BrowserRouter>
      <SideNav/>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
