import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Item = () => {
  const data = useSelector((state) => state.store.onStore);

    const location = useLocation();
    const {state} = location;

  const product = data.filter(product => state.id === product.item_id);
  const {imageUrl, name, price, title} = product[0];

  return (
    <div className='item'>
      <Link to={`/${title}`}>&laquo; Back</Link>
      <img src={imageUrl} alt="product-img" />

      <div className='item__content'>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{title}</p>
        <button>Add to cart</button>
      </div>

      <div>recommended</div>
    </div>
  )
}

export default Item