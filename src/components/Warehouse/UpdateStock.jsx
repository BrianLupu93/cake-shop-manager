import React from "react";
import { useForm } from "react-hook-form";

const UpdateStock = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">STOCK - UPDATE THE STOCK</h4>
        <form className="form-sample">
          <p className="card-description"> Product info </p>
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">
                  Expiration Date
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control"
                    {...register("expirationDate")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
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
          <div className="row">
            <div className="col-md-4">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">Quantity</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    {...register("quantity")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">Unit</label>
                <div className="col-sm-9">
                  <select
                    className="js-example-basic-single select2-hidden-accessible"
                    style={{ width: "70%" }}
                    data-select2-id="1"
                    tabindex="-1"
                    aria-hidden="true"
                    {...register("unit")}
                  >
                    <option value="AL" data-select2-id="3">
                      Kg
                    </option>
                    <option value="AL" data-select2-id="3">
                      Grams
                    </option>
                    <option value="AL" data-select2-id="3">
                      Piece
                    </option>
                    <option value="WY" data-select2-id="11">
                      Liters
                    </option>
                    <option value="WY" data-select2-id="11">
                      MiliLiters
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="form-group row  d-flex align-items-center">
                <label className="col-sm-3 col-form-label">Lot Number</label>
                <div className="col-sm-9">
                  <select
                    className="js-example-basic-single select2-hidden-accessible"
                    style={{ width: "70%" }}
                    data-select2-id="1"
                    tabindex="-1"
                    aria-hidden="true"
                    {...register("lotNo")}
                  >
                    <option value="AL" data-select2-id="3">
                      Create NEW lot no.
                    </option>
                    <option value="AL" data-select2-id="3">
                      FL01
                    </option>
                    <option value="AL" data-select2-id="3">
                      FL02
                    </option>
                    <option value="WY" data-select2-id="11">
                      DR01
                    </option>
                    <option value="WY" data-select2-id="11">
                      DR02
                    </option>
                    <option value="WY" data-select2-id="11">
                      DR03
                    </option>
                    <option value="AM" data-select2-id="12">
                      NUT01
                    </option>
                    <option value="CA" data-select2-id="13">
                      BT05
                    </option>
                    <option value="CA" data-select2-id="13">
                      BT06
                    </option>
                    <option value="CA" data-select2-id="13">
                      BT07
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-gradient-primary mr-2">
            Add Item
          </button>
        </form>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STOCK SITUATION REPORTS</h4>

                <div className="row">
                  <div className="table-sorter-wrapper col-lg-12 table-responsive grid-margin">
                    <table
                      id="sortable-table-2"
                      className="table table-striped "
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
                            Lot No.<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Quantity<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Entry Date<i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Expiration Date
                            <i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Status
                            <i className="mdi mdi-chevron-down"></i>
                          </th>
                          <th className="sortStyle">
                            Exp.
                            <i className="mdi mdi-chevron-down"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* 
                      
                      mdi mdi-brightness-1

                      mdi mdi-calendar-check


                      mdi mdi-calendar-remove
                      mdi mdi-checkbox-marked-circle
                      mdi mdi-close-circle
                      
                      */}

                        <tr>
                          <td>1</td>
                          <td>Flour</td>
                          <td>Raw Material</td>
                          <td>FL02</td>
                          <td>20/Kg</td>
                          <td>12.06.2021</td>
                          <td>22.10.2021</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Coca Cola</td>
                          <td>Drinks</td>
                          <td>DR01</td>
                          <td>45/Pieces</td>
                          <td>14.05.2021</td>
                          <td>10.06.2024</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Nutella</td>
                          <td>Raw Materials</td>
                          <td>NUT01</td>
                          <td>1/Kg</td>
                          <td>05.05.2021</td>
                          <td>10.10.2024</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Cake Box XL</td>
                          <td>Packing</td>
                          <td>CBXL01</td>
                          <td>75/Pieces</td>
                          <td>--</td>
                          <td>--</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Cake Box M</td>
                          <td>Packing</td>
                          <td>CBM05</td>
                          <td>35/Pieces</td>
                          <td>--</td>
                          <td>--</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>

                        <tr>
                          <td>6</td>
                          <td>Tuborg</td>
                          <td>Drinks</td>
                          <td>DR01</td>
                          <td>33/Pieces</td>
                          <td>14.05.2021</td>
                          <td>10.06.2024</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Butter</td>
                          <td>Raw Material</td>
                          <td>BT07</td>
                          <td>1.6/Kg</td>
                          <td>22.06.2021</td>
                          <td>12.11.2021</td>
                          <td className="   mdi mdi-brightness-1 text-success"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Coca Cola</td>
                          <td>Drinks</td>
                          <td>DR03</td>
                          <td>20/Pieces</td>
                          <td>18.06.2021</td>
                          <td>10.09.2024</td>
                          <td className="   mdi mdi-brightness-1 text-warning"></td>
                          <td className=" mdi mdi-calendar-check text-success"></td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Flour</td>
                          <td>Raw Material</td>
                          <td>FL02</td>
                          <td>2/Kg</td>
                          <td>11.02.2021</td>
                          <td>12.06.2021</td>
                          <td className="   mdi mdi-brightness-1 text-danger"></td>
                          <td className=" mdi mdi-calendar-check text-danger"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          <i className="mdi mdi-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          <i className="mdi mdi-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
