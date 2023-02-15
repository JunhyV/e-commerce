import React from 'react'
import FilterBar from '../components/byCategories/FilterBar';
import FilterSelector from '../components/byCategories/FilterSelector';
import Products from '../components/byCategories/Products';
import useFilters from '../hooks/useFilter';

const Hats = () => {

  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData} = useFilters('Hats');

  return (
    <div >
      <FilterSelector orderByCheapest={orderByCheapest} orderByExpensive={orderByExpensive} orderDefault={orderDefault}/>
      <FilterBar changeData={changeData} min={14} max={36}/>
      <Products data={data}/>
    </div>
  )
}

export default Hats

