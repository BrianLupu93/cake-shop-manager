import React, { useState } from "react";
import PageContent from "../../Utils/PageContent";
import LabActivity from "./LabActivity";
import Orders from "./Orders";
import LabStock from "./LabStock";
import Recipes from "./Recipes";

const Laboratory = () => {
  const [components, setComponents] = useState([
    { name: "lab activity", component: <LabActivity />, display: true },
    { name: "orders", component: <Orders />, display: false },
    { name: "lab stock", component: <LabStock />, display: false },
    { name: "recipes", component: <Recipes />, display: false },
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
      title="Laboratory"
      icon="mdi-cake-variant"
      content={
        <>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="col-12 d-flex add-items justify-content-center">
                <button
                  value="lab activity"
                  type="button"
                  className="btn btn-dark btn-fw "
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Lab Activity
                </button>

                <button
                  value="orders"
                  type="button"
                  className="btn btn-dark btn-fw"
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Orders
                </button>
                <button
                  value="lab stock"
                  type="button"
                  className="btn btn-dark btn-fw"
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Lab Stock
                </button>
                <button
                  value="recipes"
                  type="button"
                  className="btn btn-dark btn-fw"
                  onClick={(e) => updateComponents(e.target.value)}
                >
                  Recipes
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

export default Laboratory;
