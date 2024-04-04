import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
appStore = configureStore({

       reducer: {
        cart: cartReducer,
       },
});


export default appStore;