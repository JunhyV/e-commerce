import React from "react";

const FilterBar = ({changeData, min, max, type}) => {
  return (
    <div className="filter">
      <div className="filter__priceRange">
        <input
          type="range"
          min={min}
          max={max}
          onChange={(e) => {
            rangeValue.value = `$${e.target.value}`;
            changeData(e.target.value, type)
          }}
        />
        <output id="rangeValue">$50</output>
      </div>
    </div>
  );
};

export default FilterBar;
