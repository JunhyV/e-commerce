import React, { useEffect, useState } from "react";

const FilterBar = ({changeData, min, max}) => {
  const [value, setValue] = useState(0);
  
  return (
      <div className="filter__byRange ">
        <input
          type="range"
          min={min}
          max={max}
          className='filter__range'
          onChange={(e) => {
            changeData(e.target.value)
            setValue(e.target.value)
          }}
        />
        <output className="filter__price" id="rangeValue">${value}</output>
      </div>
  );
};

export default FilterBar;
