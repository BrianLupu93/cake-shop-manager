import React from "react";

const LabActivity = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lab Activity</h4>
        <p className="card-description">22.10.2021</p>
        <div className="col-lg-12 grid-margin stretch-card">
          <table id="sortable-table-2" className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th className="sortStyle">
                  User Name<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Type<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  ID<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Status<i className="mdi mdi-chevron-down"></i>
                </th>
                <th className="sortStyle">
                  Edit<i className="mdi mdi-chevron-down"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>James</td>
                <td>Orders</td>
                <td>OR050</td>
                <td>
                  <label className="badge badge-danger">Pending</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>2</td>
                <td>James</td>
                <td>Orders</td>
                <td>OR048</td>
                <td>
                  <label className="badge badge-warning">In progress</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Oliver</td>
                <td>Lab Stock</td>
                <td>LAB015</td>
                <td>
                  <label className="badge badge-success">Completed</label>
                </td>
                <td className="mdi mdi-check-circle text-success"></td>
              </tr>
              <tr>
                <td>4</td>
                <td>James</td>
                <td>Lab Stock</td>
                <td>LAB022</td>
                <td>
                  <label className="badge badge-info">Begin</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Oliver</td>
                <td>Orders</td>
                <td>OR039</td>
                <td>
                  <label className="badge badge-danger">Pending</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Oliver</td>
                <td>Orders</td>
                <td>OR044</td>
                <td>
                  <label className="badge badge-warning">In progress</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>7</td>
                <td>James</td>
                <td>Lab Stock</td>
                <td>LAB029</td>
                <td>
                  <label className="badge badge-info">Begin</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Oliver</td>
                <td>Orders</td>
                <td>OR041</td>
                <td>
                  <label className="badge badge-info">Begin</label>
                </td>
                <td className="mdi mdi-lead-pencil text-info"></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Oliver</td>
                <td>Lab Stock</td>
                <td>LAB021</td>
                <td>
                  <label className="badge badge-success">Completed</label>
                </td>
                <td className="mdi mdi-check-circle text-success"></td>
              </tr>
              <tr>
                <td>10</td>
                <td>James</td>
                <td>Orders</td>
                <td>OR047</td>
                <td>
                  <label className="badge badge-success">Complete</label>
                </td>
                <td className="mdi mdi-check-circle text-success"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LabActivity;
