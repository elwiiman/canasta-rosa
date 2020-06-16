import React from "react";
const MaxPriceFilter = ({ handleChange, filter }) => {
  return (
    <div className="ml-2 form-group">
      <select
        className="custom-select custom-select-sm"
        value={filter.maxPriceSelected}
        onChange={handleChange}
        name="maxPriceSelected"
      >
        <option value="">Elige una opción</option>
        <option value="100">$100</option>
        <option value="200">$200</option>
        <option value="300">$300</option>
        <option value="400">$400</option>
        <option value="500">$500</option>
      </select>
    </div>
  );
};

export default MaxPriceFilter;
