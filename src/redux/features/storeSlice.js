import { createSlice, current } from "@reduxjs/toolkit";
import { callStore } from "../../utils/apiCall";

const initialState = {
  onStore: await callStore("http://localhost:5000/api/store/collections"),
  onCart: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let identificarProducto = state.onStore.find(
        (product) => product.item_id === action.payload
      );

      /*             console.log(current(identificarProducto));
            //Sin current la consola muestra un Proxy */

      let articuloEnCarro = state.onCart.find(
        (product) => product.item_id === identificarProducto.item_id
      );

      return articuloEnCarro
        ? {
            ...state,
            onCart: state.onCart.map((product) =>
              product.item_id === identificarProducto.item_id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            onCart: [...state.onCart, { ...identificarProducto, quantity: 1 }],
          };

    },

    removeFormCart: (state, action) => {
      let removerProducto = state.onCart.find(
        (product) => product.item_id === action.payload
      );
      console.log(current(removerProducto));

      return removerProducto.quantity > 1
        ? {
            ...state,
            onCart: state.onCart.map((product) =>
              product.item_id === removerProducto.item_id
                ? { ...product, quantity: product.quantity - 1 }
                : { ...product }
            ),
          }
        : {
            ...state,
            onCart: state.onCart.filter(
              (product) => product.item_id !== action.payload
            ),
          };
    },

    removeAllFormCart: (state, action) => {
      return {
        ...state,
        onCart: state.onCart.filter(
          (product) => product.item_id !== action.payload
        ),
      };
    },

    modifyQuantity: (state) => {state},

    clearCart: () => {
      return initialState;
    },
  },
});
export const {
  addTocart,
  removeFormCart,
  removeAllFormCart,
  modifyQuantity,
  clearCart,
} = storeSlice.actions;

export const storeReducer = storeSlice.reducer;
