import React from "react";

const GlobalApp = () => {
  return (
    <div className="container-scroller">
      {/* ------------- TOP NAVBAR START -------------- */}
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
      {/* ------------- TOP NAVBAR END -------------- */}
      <div className="container-fluid page-body-wrapper pt-0">
        {/* ------------- SIDEBAR START -------------- */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a href="#" className="nav-link">
                <div className="nav-profile-image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/faces-clipart/pic-1.png"
                    }
                    alt="profile"
                  />
                  <span className="login-status online"></span>
                  {/* <!--change to offline or busy as needed--> */}
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-secondary text-small">
                    Project Manager
                  </span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <span className="menu-title">Basic UI Elements</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/ui-features/buttons.html"
                    >
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/ui-features/typography.html"
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/icons/mdi.html">
                <span className="menu-title">Icons</span>
                <i className="mdi mdi-contacts menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                <span className="menu-title">Forms</span>
                <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/charts/chartjs.html">
                <span className="menu-title">Charts</span>
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <span className="menu-title">Tables</span>
                <i className="mdi mdi-table-large menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#general-pages"
                aria-expanded="false"
                aria-controls="general-pages"
              >
                <span className="menu-title">Sample Pages</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-medical-bag menu-icon"></i>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/samples/blank-page.html"
                    >
                      Blank Page{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/login.html">
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/register.html">
                      Register{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/error-404.html">
                      404{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/error-500.html">
                      500{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
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
        {/* ------------- SIDEBAR END -------------- */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white mr-2">
                  <i className="mdi mdi-home"></i>
                </span>{" "}
                Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span></span>Overview{" "}
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>

            {/* vfrgberhrgerer */}
          </div>
          {/* <!-- content-wrapper ends --> */}
          {/* <!-- partial:partials/_footer.html --> */}
          <footer className="footer">
            <div className="container-fluid clearfix">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © bootstrapdash.com 2020
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Free{" "}
                <a href="" target="">
                  Bootstrap admin template
                </a>{" "}
                from Bootstrapdash.com
              </span>
            </div>
          </footer>
          {/* <!-- partial --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </div>
      {/* <!-- page-body-wrapper ends --> */}
    </div>
  );
};

export default GlobalApp;
