import React from "react";
import { Link } from "react-router-dom";
import AddBtn from "../AddBtn";

const Products = ({ data }) => {

  return (
    <div className="products">
      {data.map((product) => (
        <div key={product.item_id} className="product__card">
          <Link
            to={`/store/${product.item_id} `}
            state={{ id: product.item_id, title: product.title}}
          >
            <div className="product__zoom zoom">
              <img
                className="product__img"
                src={product.imageUrl}
                alt="product-img"
              />
            </div>
          </Link>

          <Link
            className="product__link link"
            to={`/store/${product.item_id}`}
            state={{ id: product.item_id, title: product.title}}
          >
            <h3>{product.name}</h3>
          </Link>
          <p className="product__price">${product.price}.99</p>
          <AddBtn id={product.item_id}/>
        </div>
      ))}
    </div>
  );
};

export default Products;
