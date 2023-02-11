import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/features/storeSlice";

const Products = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {data.map((product) => (
        <div key={product.item_id} className="product__card">
          <img
            className="product__img"
            src={product.imageUrl}
            alt="product-img"
          />
          <h3>{product.name}</h3>
          <p className="product__price">${product.price}.99</p>
          <button onClick={() => dispatch(addTocart(product.item_id))}>
            add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
