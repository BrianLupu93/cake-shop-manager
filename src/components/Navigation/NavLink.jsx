import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ linkName, icon, linkTo, changeActive }) => {
  let classStyle = "nav-item";

  if (linkTo === window.location.pathname) {
    classStyle += " active";
  }

  return (
    <li className={classStyle}>
      <Link
        className="nav-link"
        to={linkTo}
        onClick={() => changeActive(linkName)}
      >
        <span className="menu-title">{linkName}</span>
        <i className={`mdi ${icon} menu-icon`}></i>
      </Link>
    </li>
  );
};

export default NavLink;
