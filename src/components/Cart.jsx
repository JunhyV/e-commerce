import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, clearCart, removeAllFormCart, removeFormCart } from "../redux/features/storeSlice";

const Cart = () => {
  const cart = useSelector()
  const dispatch = useDispatch();
  return (
    
    <div>
      <button onClick={() => dispatch(addTocart(product.item_id))}>add</button>
      <button onClick={() => dispatch(removeFormCart(product.item_id))}>
        remove
      </button>
      <button onClick={() => dispatch(removeAllFormCart(product.item_id))}>
        remove all
      </button>
      <button onClick={() => dispatch(clearCart(product.item_id))}>
        clear
      </button>
    </div>
  );
};

export default Cart;
