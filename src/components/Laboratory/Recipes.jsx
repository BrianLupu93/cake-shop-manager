import React from "react";
import { useForm } from "react-hook-form";

const Recipes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="card grid-margin">
        <div className="card-body">
          <h4 className="card-title">RECIPES - Update the List</h4>
          <form className="form-sample">
            <p className="card-description"> Add a new Recipe </p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row  d-flex align-items-center">
                  <label className="col-sm-3 col-form-label">Recipe Name</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      {...register("recipeName")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-group row  d-flex align-items-center">
                  <label className="col-sm-3 col-form-label">
                    Recipe Category
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="js-example-basic-single select2-hidden-accessible"
                      style={{ width: "70%" }}
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                      {...register("recipeCategory")}
                    >
                      <option value="AL" data-select2-id="3">
                        Cakes
                      </option>
                      <option value="WY" data-select2-id="11">
                        Macarons
                      </option>
                      <option value="AM" data-select2-id="12">
                        Cupcakes
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="d-flex justify-content-center">Ingredients</p>
            <div className="row">
              <div className="col-md-3 ">
                <div className="form-group row  d-flex align-items-center">
                  <label className="col-sm-6 col-form-label">
                    Add ingredients
                  </label>
                  <div className="col-sm-6">
                    <select
                      className="js-example-basic-single select2-hidden-accessible"
                      style={{ width: "70%" }}
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                      {...register("ingredient")}
                    >
                      <option value="AL" data-select2-id="3">
                        Carrot
                      </option>
                      <option value="WY" data-select2-id="11">
                        Cacao
                      </option>
                      <option value="AM" data-select2-id="12">
                        Milk
                      </option>
                      <option value="AL" data-select2-id="3">
                        Honey
                      </option>
                      <option value="WY" data-select2-id="11">
                        Butter
                      </option>
                      <option value="AM" data-select2-id="12">
                        Flour
                      </option>
                      <option value="AL" data-select2-id="3">
                        Nuts
                      </option>
                      <option value="WY" data-select2-id="11">
                        Sugar
                      </option>
                      <option value="AM" data-select2-id="12">
                        Vanilla
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group row  d-flex align-items-center">
                  <label className="col-sm-4 col-form-label">Quantity</label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      {...register("ingredientQuantity")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="form-group row  d-flex align-items-center">
                  <label className="col-sm-3 col-form-label">Unit</label>
                  <div className="col-sm-9">
                    <select
                      className="js-example-basic-single select2-hidden-accessible"
                      style={{ width: "70%" }}
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                      {...register("ingredientUnit")}
                    >
                      <option value="AL" data-select2-id="3">
                        kg
                      </option>
                      <option value="WY" data-select2-id="11">
                        Grams
                      </option>
                      <option value="AM" data-select2-id="12">
                        Liter
                      </option>
                      <option value="AM" data-select2-id="12">
                        Mililiters
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Add Ingredient
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                <div className="col-md-1 p-1">
                  <div className=" p-0 badge badge-info d-flex justify-content-center">
                    <p className="m-0 p-2">Cacao: 100g</p>
                    <p className=" mdi mdi-close-circle text-danger"></p>
                  </div>
                </div>
                <div className="col-md-1 p-1">
                  <div className=" p-0 badge badge-info d-flex justify-content-center ">
                    <p className="m-0 p-2">Butter: 250g</p>
                    <p className=" mdi mdi-close-circle text-danger"></p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">RECIPES - List</h4>

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
                              Name<i className="mdi mdi-chevron-down"></i>
                            </th>
                            <th className="sortStyle">
                              Category<i className="mdi mdi-chevron-down"></i>
                            </th>
                            <th className="sortStyle">
                              Details<i className="mdi mdi-chevron-down"></i>
                            </th>
                            <th className="sortStyle">
                              Prepare<i className="mdi mdi-chevron-down"></i>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Carrot Cake</td>
                            <td>Cakes</td>
                            <td>
                              <a href="/">Details</a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-success btn-sm"
                              >
                                Prepare
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Lime Macarons</td>
                            <td>Macarons</td>
                            <td>
                              <a href="/">Details</a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-success btn-sm"
                              >
                                Prepare
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Chocolate Cupcakes</td>
                            <td>Cupcakes</td>
                            <td>
                              <a href="/">Details</a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-success btn-sm"
                              >
                                Prepare
                              </button>
                            </td>
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
    </>
  );
};

export default Recipes;
