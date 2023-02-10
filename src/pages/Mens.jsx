import React from "react";
import { useSelector } from "react-redux";
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';

const Mens = () => {
  const store = useSelector((state) => state.store.onStore);
  const mens = store.filter((product) => product.title === "Mens");

  return (
    <div>
      <FilterBar />
      <Products data={mens} />
    </div>
  );
};

export default Mens;
