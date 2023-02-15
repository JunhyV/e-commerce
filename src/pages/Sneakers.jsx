import React from "react";
import FilterBar from '../components/byCategories/FilterBar';
import FilterSelector from '../components/byCategories/FilterSelector';
import Products from '../components/byCategories/Products';
import useFilters from '../hooks/useFilter';

const Sneakers = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData} = useFilters('Sneakers');

  return (
    <div >
      <FilterSelector orderByCheapest={orderByCheapest} orderByExpensive={orderByExpensive} orderDefault={orderDefault}/>
      <FilterBar changeData={changeData} min={110} max={280}/>
      <Products data={data}/>
    </div>
  )
};

export default Sneakers;
