import React from "react";
import FilterBar from "../../components/byCategories/FilterBar";
import FilterSelector from "../../components/byCategories/FilterSelector";
import Post from "../../components/byCategories/Post";
import Products from "../../components/byCategories/Products";
import useFilters from "../../hooks/useFilter";

const Womens = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData } =
    useFilters("Womens");

  return (
    <div className="categories">
      <div className="filters">
        <FilterSelector
          orderByCheapest={orderByCheapest}
          orderByExpensive={orderByExpensive}
          orderDefault={orderDefault}
        />
        <FilterBar changeData={changeData} min={20} max={136} />
      </div>
      <Post number={4}/>
      <Products data={data} />
    </div>
  );
};

export default Womens;
