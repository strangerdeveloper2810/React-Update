import React, { Fragment } from "react";

export default function Carts(props) {
  return (
    <Fragment>
      <h3 className="text-center text-success">Carts</h3>
      <div className="table-responsive">
        <table className="table table-info text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Product 1</td>
                <td>
                    <img src="https://i.pravatar.cc?u=1" alt="item" width={50} />
                </td>
                <td>1.000</td>
                <td>10</td>
                <td>10.000</td>
                <td>
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
