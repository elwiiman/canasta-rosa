import React, { Fragment } from "react";
import { getTodayDate, getTomorrowDate } from "../../utils/auxiliars";

const DateFilter = ({ handleChange, filter }) => {
  return (
    <div className="ml-2">
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="radio"
          name="dateSelected"
          id="anyday"
          value=""
          checked={filter.dateSelected === ""}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="anyday">
          Cualquier día
        </label>
      </div>
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="radio"
          name="dateSelected"
          id="today"
          value={getTodayDate()}
          checked={filter.dateSelected === getTodayDate()}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="today">
          Recíbelo hoy
        </label>
      </div>
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="radio"
          name="dateSelected"
          id="tomorrow"
          value={getTomorrowDate()}
          checked={filter.dateSelected === getTomorrowDate()}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="tomorrow">
          Recíbelo mañana
        </label>
      </div>
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="radio"
          name="dateSelected"
          id="pickADate"
          value="pickADate"
          checked={filter.dateSelected === "pickADate"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="pickADate">
          Elige una fecha
        </label>
        {filter.dateSelected ? (
          <input
            type="date"
            name="dateSelected"
            value={filter.dateSelected}
            onChange={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DateFilter;
