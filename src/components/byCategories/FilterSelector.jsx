import React from "react";

const FilterSelector = ({orderByCheapest, orderByExpensive, orderDefault}) => {
  return (
      <select
        name="orderByPrice"
        className="filter__byOrder"
        onChange={(e) => {
          if (e.target.value === "Cheapest") {
            orderByCheapest();
          }
          if (e.target.value === "Expensive") {
            orderByExpensive();
          }
          if (e.target.value === "Default") {
            orderDefault();
          }
        }}
      >
        <option value="Default">Default</option>
        <option value="Cheapest">Cheapest</option>
        <option value="Expensive">Expensive</option>
      </select>
  );
};

export default FilterSelector;
