import React from "react";
import { Link } from "react-router-dom";

const Recommended = ({ otherProducts }) => {
  return (
    <div className="recommended">
      {otherProducts.map((product, i) => (
        <Link
          key={i}
          to={`/store/${product.item_id} `}
          state={{ id: product.item_id, title: product.title }}
        >
          <img src={product.imageUrl} alt="product-img" />
          <div className="item__content">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.title}</p>
            <button>Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
