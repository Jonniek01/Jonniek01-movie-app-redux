import React from "react";
import "./Content.css";

import NavBar from "./NavBar/NavBar";
import {Outlet} from "react-router-dom";


function Content() {
  return (
    <div className="content">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Content;
