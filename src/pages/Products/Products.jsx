import React, { useEffect } from "react";
import Carts from "./Carts";
import ProductItems from "./ProductItems";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductApi } from "../../redux/reducers/shopReducer";

export default function Products(props) {
  const { dataProduct } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionThunk = getAllProductApi();
    // dispatch action thunk
    dispatch(actionThunk);
  }, [dispatch]);
  return (
    <div className="container">
      <h3 className="text-center text-danger">Shoes Shop</h3>
      <Carts />
      <h3 className="mt-2">Product List</h3>
      <div className="row">
        {dataProduct.map((product, index) => (
          <div className="col-4" key={index}>
            <ProductItems product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
