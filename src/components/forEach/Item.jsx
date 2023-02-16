import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Recommended from "./Recommended";

const Item = () => {
  const data = useSelector((state) => state.store.storeState.onStore);

  const location = useLocation();
  const { state } = location;

  const product = data.filter((product) => state.id === product.item_id);
  const otherProducts = data.filter((product) => state.id !== product.item_id && state.title === product.title);

  const { imageUrl, name, price, title } = product[0];

  return (
    <div className="item">
      <Link to={`/${title}`}>&laquo; Back</Link>
      <img src={imageUrl} alt="product-img" />

      <div className="item__content">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{title}</p>
        <button>Add to cart</button>
      </div>
      recommended
      <Recommended otherProducts={otherProducts}/>
    </div>
  );
};

export default Item;
