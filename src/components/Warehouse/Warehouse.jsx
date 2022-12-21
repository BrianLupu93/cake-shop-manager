import React, { useState } from "react";
import PageContent from "../../Utils/PageContent";
import Products from "./Products";
import UpdateStock from "./UpdateStock";

const Warehouse = () => {
  const [components, setComponents] = useState([
    { name: "products", component: <Products />, display: true },
    { name: "update stock", component: <UpdateStock />, display: false },
  ]);

  const updateComponents = (name) => {
    const updateContent = components.map((element) => {
      if (element.name === name) {
        element.display = true;
      } else {
        element.display = false;
      }
      return element;
    });

    setComponents(updateContent);
  };

  return (
    <PageContent
      title="Warehouse"
      icon=" mdi-dropbox"
      content={
        <>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="col-12 d-flex add-items justify-content-center">
                <button
                  value="products"
                  type="button"
                  className="btn btn-gradient-primary btn-fw "
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Products
                </button>

                <button
                  value="update stock"
                  type="button"
                  className="btn btn-gradient-primary btn-fw"
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Update Stock
                </button>
              </div>
            </div>
            <div className="row">
              {components?.map((element, i) => {
                if (element.display) {
                  return (
                    <div className="col-12 grid-margin" key={i}>
                      {element.component}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </>
      }
    />
  );
};

export default Warehouse;
