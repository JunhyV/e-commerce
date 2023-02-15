import React from "react";
import FilterBar from '../components/byCategories/FilterBar';
import FilterSelector from '../components/byCategories/FilterSelector';
import Products from '../components/byCategories/Products';
import useFilters from '../hooks/useFilter';

const Womens = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData} = useFilters('Womens');

  return (
    <div >
      <FilterSelector orderByCheapest={orderByCheapest} orderByExpensive={orderByExpensive} orderDefault={orderDefault}/>
      <FilterBar changeData={changeData} min={90} max={186}/>
      <Products data={data}/>
    </div>
  )
};

export default Womens;
