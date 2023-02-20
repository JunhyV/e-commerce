import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addTocart } from "../../redux/features/storeSlice";
import Recommended from "./Recommended";

const Item = () => {
  const data = useSelector((state) => state.store.storeState.onStore);
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;

  const product = data.filter((product) => state.id === product.item_id);
  const otherProducts = data.filter(
    (product) => state.id !== product.item_id && state.title === product.title
  );

  const { imageUrl, name, price, title, item_id } = product[0];
  console.log(product[0]);

  return (
    <div className="item">
      <Link className="backBtn link" to={`/${title}`}>
        &laquo; Back
      </Link>
      <div className="item__content">
        <img className="item__img" src={imageUrl} alt="product-img" />

        <div className="item__text">
          <h2 className="item__h2">Product: {name}</h2>
          <p>Price: ${price}</p>
          <p>Category: {title}</p>
          <button
            className="item__addBtn"
            onClick={() => dispatch(addTocart(item_id))}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="recommended">
        <h2>Recommended:</h2>
        <Recommended otherProducts={otherProducts} />
      </div>
    </div>
  );
};

export default Item;
