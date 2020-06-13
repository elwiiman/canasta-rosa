import React, { useContext, useEffect } from "react";

import productsContext from "../../context/productsContext";

const MainProductView = ({}) => {
  const ProductsContext = useContext(productsContext);
  const { products, obtainProducts } = ProductsContext;

  useEffect(() => {
    obtainProducts();
  });

  return <h1>MainProduct View</h1>;
};

export default MainProductView;
