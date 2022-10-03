import React from "react";

export default function ProductItems(props) {
  return (
    <div className="card text-white bg-primary" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://i.pravatar.cc?u=1"
        alt="item"
      />
      <div className="card-body">
        <div className="card-title">
          <h2>Product 1</h2>
          <p>1000</p>
        </div>
        <p className="card-text">
          <button className="btn btn-info">
            <i className="fa fa-cart-plus"></i>
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
