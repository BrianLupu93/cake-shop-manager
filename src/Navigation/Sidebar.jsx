import React from "react";
import profileImg from "../images/faces-clipart/pic-1.png";
import NavLink from "./NavLink";
import { sections } from "../data/navigationSections";

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <img src={profileImg} alt="profile" />
              <span className="login-status online"></span>
              {/* <!--change to offline or busy as needed--> */}
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Administrator</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        {/* ----------- SIDEBAR LINKS --------- */}
        {sections?.map((link, i) => {
          return (
            <NavLink
              key={i}
              linkName={link.name}
              icon={link.icon}
              linkTo={link.linkTo}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
