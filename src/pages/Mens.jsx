import React from "react";
import FilterBar from '../components/byCategories/FilterBar';
import FilterSelector from '../components/byCategories/FilterSelector';
import Products from '../components/byCategories/Products';
import useFilters from '../hooks/useFilter';

const Mens = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData} = useFilters('Mens');

  return (
    <div >
      <FilterSelector orderByCheapest={orderByCheapest} orderByExpensive={orderByExpensive} orderDefault={orderDefault}/>
      <FilterBar changeData={changeData} min={20} max={326}/>
      <Products data={data}/>
    </div>
  )
};

export default Mens;
