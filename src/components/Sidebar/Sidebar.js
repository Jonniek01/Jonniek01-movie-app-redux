import React from "react";
import "./Sidebar.css";
import { IoEnterSharp } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";

import Links from "./Links";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-eft">
          <SiVisualstudiocode className="sidebar-ogo" />
          <p className="sidebar-text">MOVIE APP</p>
        </div>
        <div className="sidebar-right">
          <IoEnterSharp
            style={{ color: "#acacac", height: "25", width: "30" }}
          />
        </div>
      </div>
      <div className="sidebar-bottom">
        <Links />
        <section className="sidebar-genre">
          <p className="sidebar-genre-bold-text">Genre</p>
          <p className="sidebar-genre-text">Action</p>
          <p className="sidebar-genre-text">Romance</p>
          <p className="sidebar-genre-text">Comedy</p>
          <p className="sidebar-genre-text">Horror</p>
        </section>
        <section className="sidebar-downloads">
          <p className="sidebar-genre-bold-text">Downloads</p>
          <img
            className="sidebar-download-img"
            src="https://image.tmdb.org/t/p/original/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
            alt="download"
          />
          <div className="sidebar-downloads-circle">
            <p className="sidebar-downloads-cancel">X</p>
          </div>
          <div className="sidebar-downloads-details">
            <div className="sidebar-downloads-text">
              <p className="sidebar-genre-bold-text">Downloading...</p>
              <p className="sidebar-genre-bold-text"> 21%</p>
            </div>

            <progress
              className="sidebar-downloads-progress"
              max="100"
              value="21"
            ></progress>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
