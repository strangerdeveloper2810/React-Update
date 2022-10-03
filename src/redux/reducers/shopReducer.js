import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [
    {
      id: 1,
      name: "product1",
      image: "https://i.pravatar.cc?u=1",
      price: 1000,
      quantity: 10,
    },
  ],

  dataProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
};

const shopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {
    getProductApiAction: (state, action) => {
        console.log(action);
      state.dataProduct = action.payload;
    },
  },
});

export const { getProductApiAction } = shopReducer.actions;

export default shopReducer.reducer;

// ------------------------ action thunk -----------------------------
export const getAllProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });

      //   dispatch({
      //     type: "shopReducer/getProductApi",
      //     data: result.data.content,
      //   });
      const action =  getProductApiAction(result.data.content);
      dispatch(action);
    //   action = {
    //     type: "shopReducer/getProductApi",
    //     payload: result.data.content
    // }
    } catch (error) {
      console.log(error);
    }
  };
};
