import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',

    //initialstate is a Object
    initialState: {
        //items is a cart items
        items: []

    },
    reducers: {
        addItem: (state,action) =>{
            //mutating the state here
             state.items.push(action.payload)
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart } = cartSlice.actions;
export default  cartSlice.reducer;