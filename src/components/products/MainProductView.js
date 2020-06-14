import React, { useContext, useEffect } from "react";
import ListProducts from "./ListProducts";

import productsContext from "../../context/productsContext";

const MainProductView = ({}) => {
  const ProductsContext = useContext(productsContext);
  const { products, obtainProducts } = ProductsContext;

  useEffect(() => {
    obtainProducts();
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-2">col-2</div>
        <div className="col-10">
          <div className="row row-cols-1 row-cols-md-3">
            <ListProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductView;
