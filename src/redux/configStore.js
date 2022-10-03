import {configureStore} from "@reduxjs/toolkit"
import shopReducer from "./reducers/shopReducer";
const store = configureStore({
    reducer: {
        shopReducer
    }
});

export default store
