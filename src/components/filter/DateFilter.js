import React from "react";

const DateFilter = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="defaultCheck2"
          disabled
        />
        <label className="form-check-label" htmlFor="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
    </div>
  );
};

export default DateFilter;
