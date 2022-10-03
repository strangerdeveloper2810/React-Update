import React from 'react'
import Carts from './Carts'
import ProductItems from './ProductItems'

export default function Products(props) {
  return (
    <div className='container'>
        <h3 className="text-center text-danger">
            Shoes Shop
        </h3>

        <h3 className="mt-2">Product List</h3>
        <div className="row">
            <div className="col-4">
                <ProductItems/>
            </div>

            <div className="col-4">
                <ProductItems/>
            </div>

            <div className="col-4">
                <ProductItems/>
            </div>

        </div>
        <Carts/>
    </div>
  )
}
