import React from "react";
import { useForm } from "react-hook-form";

const Products = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">PRODUCTS - UPDATE THE PRODUCT LIST</h4>
        <form className="form-sample">
          <p className="card-description"> Product info </p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">Product Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    {...register("productName")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">
                  Product Category
                </label>
                <div className="col-sm-9">
                  <select
                    className="js-example-basic-single select2-hidden-accessible"
                    style={{ width: "70%" }}
                    data-select2-id="1"
                    tabindex="-1"
                    aria-hidden="true"
                    {...register("category")}
                  >
                    <option value="AL" data-select2-id="3">
                      Raw Materials
                    </option>
                    <option value="WY" data-select2-id="11">
                      Drinks
                    </option>
                    <option value="AM" data-select2-id="12">
                      Accessories
                    </option>
                    <option value="CA" data-select2-id="13">
                      Packing
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-gradient-primary mr-2">
            Save
          </button>
        </form>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">ALL PRODUCTS BLUEPRINT</h4>

                <div className="row">
                  <div className="table-sorter-wrapper col-lg-12 table-responsive">
                    <table
                      id="sortable-table-2"
                      className="table table-striped"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="sortStyle">
                            Product Name<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Category<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Remove<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Edit<i className="mdi mdi-chevron-down"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Flour</td>
                          <td>Raw Material</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Coca Cola</td>
                          <td>Drinks</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Nutella</td>
                          <td>Raw Materials</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Cake Box XL</td>
                          <td>Packing</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Cake Box M</td>
                          <td>Packing</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Tuborg</td>
                          <td>Drinks</td>
                          <td className="mdi mdi-close-circle text-danger"></td>
                          <td className="mdi mdi-lead-pencil text-success"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
