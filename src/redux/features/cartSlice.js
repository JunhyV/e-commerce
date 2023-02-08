import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducers:{
        addTocart: state => {state},
        removeFormCart: state => {state},
        removeAllFormCart: state => {state},
        modifyQuantity: state => {state},
        clearCart: state => {state},
    }
})
export const { addTocart, removeFormCart, removeAllFormCart, modifyQuantity, clearCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer;