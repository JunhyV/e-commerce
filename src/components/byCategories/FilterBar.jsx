import React from "react";

const FilterBar = ({changeData, min, max}) => {
  return (
    <div className="filter">
      <div className="filter__priceRange">
        <input
          type="range"
          min={min}
          max={max}
          onChange={(e) => {
            rangeValue.value = `$${e.target.value}`;
            changeData(e.target.value)
          }}
        />
        <output id="rangeValue"> -</output>
      </div>
    </div>
  );
};

export default FilterBar;
