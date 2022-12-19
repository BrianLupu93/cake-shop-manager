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
        {sections &&
          Object.keys(sections).map((sectionName) => {
            return sections[sectionName].map((link, i) => {
              return <NavLink key={i} linkName={link.name} icon={link.icon} />;
            });
          })}

        <li className="nav-item sidebar-actions">
          <span className="nav-link">
            <div className="border-bottom">
              <h6 className="font-weight-normal mb-3">Projects</h6>
            </div>
            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">
              + Add a project
            </button>
            <div className="mt-4">
              <div className="border-bottom">
                <p className="text-secondary">Categories</p>
              </div>
              <ul className="gradient-bullet-list mt-4">
                <li>Free</li>
                <li>Pro</li>
              </ul>
            </div>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
