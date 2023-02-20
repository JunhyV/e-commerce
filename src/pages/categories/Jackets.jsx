import React from "react";
import FilterBar from "../../components/byCategories/FilterBar";
import FilterSelector from "../../components/byCategories/FilterSelector";
import Post from "../../components/byCategories/Post";
import Products from "../../components/byCategories/Products";
import useFilters from "../../hooks/useFilter";

const Jackets = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData } =
    useFilters("Jackets");

  return (
    <div className="categories">
      <div className="filters">
        <FilterSelector
          orderByCheapest={orderByCheapest}
          orderByExpensive={orderByExpensive}
          orderDefault={orderDefault}
        />
        <FilterBar changeData={changeData} min={90} max={186} />
      </div>
      <Post number={0}/>
      <Products data={data} />
    </div>
  );
};

export default Jackets;
