import React from "react";

const NavLink = ({ linkName, icon }) => {
  return (
    <li className={linkName === "Dashboard" ? "nav-item active" : "nav-item"}>
      <a className="nav-link" href="index.html">
        <span className="menu-title">{linkName}</span>
        <i className={`mdi ${icon} menu-icon`}></i>
      </a>
    </li>
  );
};

export default NavLink;
