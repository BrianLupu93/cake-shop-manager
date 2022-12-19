import React from "react";
import Sidebar from "./Navigation/Sidebar";
import Topbar from "./Navigation/Topbar";

const GlobalApp = () => {
  return (
    <div className="container-scroller">
      <Topbar />

      <div className="container-fluid page-body-wrapper pt-0">
        <Sidebar />

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white mr-2">
                  <i className="mdi mdi-home"></i>
                </span>{" "}
                Dashboard
              </h3>
            </div>
          </div>

          {/* <footer className="footer">
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
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default GlobalApp;
