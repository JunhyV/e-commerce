import React from "react";
import { Link } from "react-router-dom";

const Recommended = ({ otherProducts }) => {
  return (
    <div className="recommended__container">
      {otherProducts.map((product, i) => (
        <Link
          key={i}
          className='recommended__card link'
          to={`/store/${product.item_id} `}
          state={{ id: product.item_id, title: product.title }}
        >
          <img className="recommended__img" src={product.imageUrl} alt="product-img" />
          <div className="recommended__content">
            <h2 className="recommended__name">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
