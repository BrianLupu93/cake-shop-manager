import React from "react";

const Orders = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Orders</h4>

        <div className="col-lg-12 grid-margin stretch-card">
          <table id="sortable-table-2" className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th className="sortStyle">
                  Name<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Date<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Product<i className="mdi mdi-chevron-down"></i>
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
                <td>OR010</td>
                <td>Olivia Smith</td>
                <td>25.10.2021</td>
                <td>Orange Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR016</td>
                <td>Grace Brown</td>
                <td>29.10.2021</td>
                <td>Carrot Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR013</td>
                <td>Livia Smith</td>
                <td>15.10.2021</td>
                <td>Red Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR017</td>
                <td>George Lee</td>
                <td>04.11.2021</td>
                <td>Royal Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR019</td>
                <td>Nicholas Green</td>
                <td>25.10.2021</td>
                <td>King Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR021</td>
                <td>Alex Bann</td>
                <td>11.11.2021</td>
                <td>Macarons</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR023</td>
                <td>Trace Hood</td>
                <td>21.11.2021</td>
                <td>Cup Cakes</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
              <tr>
                <td>OR025</td>
                <td>John Flow</td>
                <td>27.11.2021</td>
                <td>Orange Cake</td>
                <td>
                  <a href="/">Details</a>
                </td>
                <td>
                  <button type="button" class="btn btn-gradient-success btn-sm">
                    Prepare
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
