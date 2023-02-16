import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  clearCart,
  removeAllFormCart,
  removeFormCart,
} from "../../redux/features/storeSlice";

const CartContent = ({ handleContent }) => {
  const cart = useSelector((state) => state.store.storeState.onCart);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div className="cart__content">
      <header>
        <button onClick={handleContent}>close</button>
      </header>
      <main>
        <div className="cart__products">
          {cart.map((product) => (
            <div key={product.item_id} className="cart__card">
              <img src={product.imageUrl} alt="product-view" />
              <h3>{product.name}</h3>
              <div className="cart__stock">
                <p>
                  ${product.price} x{product.quantity} =
                </p>
                <p>${product.price * product.quantity}</p>
              </div>
              <div className="cart__buttons">
                <div>
                  <button onClick={() => dispatch(addTocart(product.item_id))}>
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFormCart(product.item_id))}
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeAllFormCart(product.item_id))}
                >
                  remove all
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <h3 className="cart__subtotal">Subtotal = ${cart.reduce((amount,product) => (product.price * product.quantity) + amount, 0)}</h3>
      <button onClick={() => dispatch(clearCart(product.item_id))}>
        clear
      </button>
      <footer>subtotal buy return home</footer>
    </div>
  );
};

export default CartContent;
