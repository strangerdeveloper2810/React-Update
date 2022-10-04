import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/reducers/shopReducer";

export default function ProductItems(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const addToCartItem = () => {
    const cartItem = { ...product, quantity: 1 };
    const action = addToCartAction(cartItem);
    dispatch(action);
  };
  return (
    <div className="card text-white mt-3" style={{ height: 550, width: 350 }}>
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
        style={{ width: 350, height: 353 }}
      />
      <div className="card-body bg-gradient bg-success">
        <div className="card-title">
          <h2>{product.name}</h2>
          <p>{product.price.toLocaleString()} $</p>
        </div>
        <p className="card-text">
          <button
            className="btn btn-info"
            type="button"
            onClick={() => {
              addToCartItem();
            }}
          >
            <i className="fa fa-cart-plus"></i>
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
