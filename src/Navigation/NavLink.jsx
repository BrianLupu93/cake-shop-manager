import React from "react";

const NavLink = ({ linkName, icon, linkTo }) => {
  return (
    <li className={linkName === "Dashboard" ? "nav-item active" : "nav-item"}>
      <a className="nav-link" href={linkTo}>
        <span className="menu-title">{linkName}</span>
        <i className={`mdi ${icon} menu-icon`}></i>
      </a>
    </li>
  );
};

export default NavLink;
