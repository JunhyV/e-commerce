import React from 'react'
import { useSelector } from 'react-redux'
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';

const Hats = () => {

  const store = useSelector(state => state.store.onStore)
  const hats = store.filter(product => product.title === 'Hats');

  return (
    <div >
      <FilterBar/>
      <Products data={hats}/>
    </div>
  )
}

export default Hats