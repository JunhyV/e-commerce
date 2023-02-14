import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTocart } from "../../redux/features/storeSlice";

const Products = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {data.map((product) => (
        <div key={product.item_id} className="product__card">
          <Link to={`/store/${product.item_id} ` } state={{ id: product.item_id }}>
            <div className="product__zoom">
              <img
                className="product__img"
                src={product.imageUrl}
                alt="product-img"
              />
            </div>
          </Link>

          <Link className="link" to={`/store/${product.item_id}`} state={{ id: product.item_id }}>
            <h3>{product.name}</h3>
          </Link>
          <p className="product__price">${product.price}.99</p>

          <button
            className="btn"
            onClick={() => dispatch(addTocart(product.item_id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
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
              <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
              <path d="M15 6h6m-3 -3v6" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
