import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Horizontal Two column</h4>
            <form className="form-sample">
              <p className="card-description"> Personal info </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Last Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        {products &&
          Object.keys(products).map((product, i) => {
            return (
              <div
                key={i}
                className="table-sorter-wrapper col-lg-4 table-responsive"
              >
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      {(product === "rawMaterials" && "Raw Materials") ||
                        (product === "supplies" && "Supplies") ||
                        (product === "finishedProducts" && "Finished Products")}
                    </h4>
                    <table
                      id="sortable-table-2"
                      className="table table-striped"
                    >
                      <thead>
                        <tr>
                          {Object.keys(products[product][0]).map(
                            (element, i) => {
                              return (
                                <th key={i} className="sortStyle unsortStyle">
                                  {element.toUpperCase()}
                                  <i className="mdi mdi-chevron-down"></i>
                                </th>
                              );
                            }
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {products[product].map((element) => {
                          return (
                            <tr key={i}>
                              <td>{element.id}</td>
                              <td>{element.name}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
