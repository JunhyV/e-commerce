import React from "react";
import FilterBar from "../../components/byCategories/FilterBar";
import FilterSelector from "../../components/byCategories/FilterSelector";
import Post from "../../components/byCategories/Post";
import Products from "../../components/byCategories/Products";
import useFilters from "../../hooks/useFilter";

const Mens = () => {
  const { data, orderByCheapest, orderByExpensive, orderDefault, changeData } =
    useFilters("Mens");

  return (
    <div className="categories">
      <div className="filters">
        <FilterSelector
          orderByCheapest={orderByCheapest}
          orderByExpensive={orderByExpensive}
          orderDefault={orderDefault}
        />
        <FilterBar changeData={changeData} min={20} max={326} />
      </div>
      <Post number={1}/>
      <Products data={data} />
    </div>
  );
};

export default Mens;
