import React from "react";

const PageContent = ({ title, icon, content }) => {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className={`mdi ${icon}`}></i>
          </span>{" "}
          {title}
        </h3>
      </div>
      {content}
    </div>
  );
};

export default PageContent;
