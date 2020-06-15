import React, { useState, useContext, useEffect } from "react";
import DateFilter from "./DateFilter";
// import { evaluateURL } from "../../utils/auxiliars";

import productsContext from "../../context/productsContext";

const Filter = () => {
  const ProductsContext = useContext(productsContext);
  const { obtainProducts, slug } = ProductsContext;

  const [filter, setFilter] = useState({
    dateSelected: "",
  });

  const [url, setUrl] = useState("");

  ///For dates
  useEffect(() => {
    if (slug === "Empty" && filter.dateSelected !== "") {
      setUrl(`/products/?delivery_date=${filter.dateSelected}`);
    } else if (slug !== "Empty" && filter.dateSelected !== "") {
      setUrl(
        `/products/?category__slug=${slug}&delivery_date=${filter.dateSelected}`
      );
    } else {
      setUrl("/products/");
    }

    console.log("armed", url);
  }, [slug, filter]);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (filter.dateSelected === "pickADate") {
      return;
    }
    obtainProducts(url, slug);
    setFilter({
      dateSelected: "",
    });
  };

  return (
    <form>
      <h5> Día de entrega</h5>
      <DateFilter handleChange={handleChange} filter={filter} />

      <button
        className={"btn-filter"}
        type="submit"
        onClick={() => {
          submit();
        }}
      >
        Aplicar Filtro
      </button>
    </form>
  );
};

export default Filter;
