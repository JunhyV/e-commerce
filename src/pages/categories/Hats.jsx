import React from "react";
import FilterBar from "../../components/byCategories/FilterBar";
import FilterSelector from "../../components/byCategories/FilterSelector";
import Post from "../../components/byCategories/Post";
import Products from "../../components/byCategories/Products";
import useFilters from "../../hooks/useFilter";

const Hats = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData } = useFilters("Hats");

  return (
    <div className="categories">
      <div className="filters">
        <FilterSelector
          orderByCheapest={orderByCheapest}
          orderByExpensive={orderByExpensive}
          orderDefault={orderDefault}
        />
        <FilterBar changeData={changeData} min={14} max={36} />
      </div>
      <Post number={3}/>
      <Products data={data} />
    </div>
  );
};

export default Hats;
