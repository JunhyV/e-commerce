import React from "react";
import { useSelector } from "react-redux";
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';

const Womens = () => {
  const store = useSelector((state) => state.store.onStore);
  const womens = store.filter((product) => product.title === "Womens");

  return (
    <div>
      <FilterBar />
      <Products data={womens} />
    </div>
  );
};

export default Womens;
