import React from 'react'
import "./NavBar.css"
import { AiOutlineSearch} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";


function Nav() {
  return (
    <div className="nav">
      <div className="nav-search">
        <AiOutlineSearch style={{ color: "white", fontSize: "20" }} />
        <input
          className="nav-search-input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="nav-icons">
        <FiSettings />
        <img
          src={`https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png`}
          alt=""
          className="nav-avatar"
        />
      </div>
    </div>
  );
}

export default Nav