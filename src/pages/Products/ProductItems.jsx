import React from "react";

export default function ProductItems(props) {
  const { product } = props;
  return (
    <div className="card text-white bg-success mt-3" style={{height: 550, width: 350}}>
      <img className="card-img-top" src={product.image} alt={product.name} style={{width:350, height: 353}}/>
      <div className="card-body">
        <div className="card-title">
          <h2>{product.name}</h2>
          <p>{product.price.toLocaleString()} $</p>
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
