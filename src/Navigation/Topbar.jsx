import React from "react";

const Topbar = () => {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row pt-5 mt-3">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html">
          <img src={process.env.PUBLIC_URL + "assets/logo.svg"} alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img
            src={process.env.PUBLIC_URL + "assets/logo-mini.svg"}
            alt="logo"
          />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
