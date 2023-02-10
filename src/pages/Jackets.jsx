import React from "react";
import { useSelector } from "react-redux";
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';

const Jackets = () => {
  const store = useSelector((state) => state.store.onStore);
  const jackets = store.filter((product) => product.title === "Jackets");

  return (
    <div>
      <FilterBar />
      <Products data={jackets} />
    </div>
  );
};

export default Jackets;
