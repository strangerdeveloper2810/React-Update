import  {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        stateNumber: (state = 1)=> {
            return state
        }
    }
});

export default store;