import React from "react";

const Products = ({ data }) => {
    console.log(data);
  return (
    <div className="products">
      {data.map((product) => (
        <div className="product__card">
          <img className="product__img" src={product.imageUrl} alt="product-img" />
          <h3>{product.name}</h3>
          <p className="product__price">${product.price}.99</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
