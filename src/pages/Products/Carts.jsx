import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartAction,
  upAndDownItemAction,
} from "../../redux/reducers/shopReducer";
export default function Carts(props) {
  const { cart } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    const action = deleteCartAction(id);
    dispatch(action);
  };

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
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.name} width={50} />
                </td>
                <td>{item.price} $</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      const itemQuantity = {
                        id: item.id,
                        quantity: 1,
                      };
                      const action = upAndDownItemAction(itemQuantity);
                      dispatch(action);
                    }}
                  >
                    <i className="fa fa-plus"></i>
                  </button>

                  {item.quantity}

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      const itemQuantity = {
                        id: item.id,
                        quantity: -1,
                      };
                      const action = upAndDownItemAction(itemQuantity);
                      dispatch(action);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{(item.quantity * item.price).toLocaleString()} $</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
