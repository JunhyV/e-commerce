import { createSlice } from "@reduxjs/toolkit";
import { callStore } from "../../utils/apiCall";


export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        onStore: await callStore("http://localhost:5000/api/store/collections"),
        onCart: [],
    },
    reducers:{
        addTocart: state => {state},
        removeFormCart: state => {state},
        removeAllFormCart: state => {state},
        modifyQuantity: state => {state},
        clearCart: state => {state},
    }
})
export const { addTocart, removeFormCart, removeAllFormCart, modifyQuantity, clearCart } = storeSlice.actions

export const storeReducer = storeSlice.reducer;