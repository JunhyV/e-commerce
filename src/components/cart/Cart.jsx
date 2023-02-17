import React from "react";
import { useSelector } from "react-redux";
import useDisplay from "../../hooks/useDisplay";
import CartContent from "./CartContent";

const Cart = () => {
    const { displayContent, handleContent } = useDisplay();
    const cart = useSelector(state => state.store.storeState.onCart)
    const itemsOnCart = cart.reduce((a,b) => a + b.quantity, 0);
  return (
    <>
      <button className="btn cart" onClick={handleContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#353535"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>

        {itemsOnCart > 0 ? (
          <div className="cart__box">
            <p className="cart__quantity">{itemsOnCart}</p>
          </div>
        ) : null}
      </button>

      {displayContent ? <CartContent displayContent={displayContent} handleContent={handleContent}/> : null}
    </>
  );
};

export default Cart;
