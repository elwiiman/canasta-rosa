import React, { useState, useContext, useEffect } from "react";
import DateFilter from "./DateFilter";
import MinPriceFilter from "../filter/MinPriceFilter";
import MaxPriceFilter from "../filter/MaxPriceFilter";

import { calculateUrl } from "../../utils/auxiliars";

import productsContext from "../../context/productsContext";

const Filter = () => {
  const ProductsContext = useContext(productsContext);
  const { obtainProducts, slug, firstConsult } = ProductsContext;

  const [filter, setFilter] = useState({
    dateSelected: "",
    minPriceSelected: "",
    maxPriceSelected: "",
  });

  const [url, setUrl] = useState("");

  ///For dates
  useEffect(() => {
    if (firstConsult) {
      let newUrl = calculateUrl(
        slug,
        filter.dateSelected,
        filter.minPriceSelected,
        filter.maxPriceSelected
      );

      setUrl(newUrl);
      console.log(newUrl);
    }
  }, [
    slug,
    filter.minPriceSelected,
    filter.maxPriceSelected,
    filter.dateSelected,
    url,
    firstConsult,
  ]);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filter.dateSelected === "pickADate") {
      return;
    }
    obtainProducts(url, slug);
    setFilter({
      dateSelected: "",
      minPriceSelected: "",
      maxPriceSelected: "",
    });
  };

  return (
    <form>
      <h6> Día de entrega</h6>
      <DateFilter handleChange={handleChange} filter={filter} />

      <h6> Precio mínimo</h6>
      <MinPriceFilter handleChange={handleChange} filter={filter} />

      <h6> Precio máximo</h6>
      <MaxPriceFilter handleChange={handleChange} filter={filter} />

      <button
        className={"btn-filter"}
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Aplicar Filtro
      </button>
    </form>
  );
};

export default Filter;
