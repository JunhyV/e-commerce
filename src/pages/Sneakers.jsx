import React from "react";
import { useSelector } from "react-redux";
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';

const Sneakers = () => {
  const store = useSelector((state) => state.store.onStore);
  const sneakers = store.filter((product) => product.title === "Sneakers");

  return (
    <div>
      <FilterBar />
      <Products data={sneakers} />
    </div>
  );
};

export default Sneakers;
