import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../images/faces-clipart/pic-1.png";
import NavLink from "./NavLink";

const Sidebar = () => {
  const [sectionsLinks, setSectionsLinks] = useState([
    {
      name: "Dashboard",
      icon: "mdi mdi-home",
      linkTo: "/dashboard",
      active: true,
    },

    {
      name: "Cake Shop",
      icon: "mdi  mdi mdi-store",
      linkTo: "/cake-shop",
      active: false,
    },

    {
      name: "Laboratory",
      icon: "mdi mdi-cake-variant",
      linkTo: "/laboratory",
      active: false,
    },

    {
      name: "Warehouse",
      icon: "mdi mdi-dropbox",
      linkTo: "/warehouse",
      active: false,
    },

    {
      name: "Shopping-list",
      icon: "mdi mdi-cart-outline",
      linkTo: "/shopping-list",
      active: false,
    },
    {
      name: "Users",
      icon: "mdi mdi-account",
      linkTo: "/users",
      active: false,
    },
    {
      name: "Log-Out",
      icon: "mdi mdi-exit-to-app",
      // linkTo: "/log-out",
      active: false,
    },
  ]);

  const changeActive = (name) => {
    const updatedSectionsLinks = sectionsLinks?.map((section) => {
      if (section.name === name) {
        section.active = true;
      } else {
        section.active = false;
      }
      return section;
    });
    setSectionsLinks(updatedSectionsLinks);
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <Link to="/*" className="nav-link">
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
          </Link>
        </li>
        {/* ----------- SIDEBAR LINKS --------- */}
        {sectionsLinks?.map((link, i) => {
          return (
            <NavLink
              key={i}
              linkName={link.name}
              icon={link.icon}
              linkTo={link.linkTo}
              changeActive={changeActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
