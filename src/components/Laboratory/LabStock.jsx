import React from "react";

const LabStock = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lab Stock</h4>

        <div className="col-lg-12 grid-margin stretch-card">
          <table id="sortable-table-2" className="table table-striped">
            <thead>
              <tr>
                <th>
                  Product<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Quantity<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Lot No.<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Expiration Date<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Edit<i className="mdi mdi-chevron-down"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vanilla Macarons</td>
                <td>25</td>
                <td>MAC020</td>
                <td>23.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Chocolate Macarons</td>
                <td>15</td>
                <td>MAC021</td>
                <td>23.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Blueberry Macarons</td>
                <td>35</td>
                <td>MAC019</td>
                <td>24.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Lime Macarons</td>
                <td>22</td>
                <td>MAC022</td>
                <td>19.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Carrot Cake</td>
                <td>1</td>
                <td>CK010</td>
                <td>22.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Chocolate Cupkakes</td>
                <td>10</td>
                <td>CUP011</td>
                <td>27.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Jay Cup</td>
                <td>12</td>
                <td>JAY09</td>
                <td>21.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Vanilla Sill</td>
                <td>12</td>
                <td>SL022</td>
                <td>17.09.2021</td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LabStock;
