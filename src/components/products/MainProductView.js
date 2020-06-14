import React, { useContext, useEffect, Fragment } from "react";
import ListProducts from "./ListProducts";
import Paginator from "../layout/Paginator";
import Spinner from "../loading/Spinner";
import Filter from "../filter/Filter";

import productsContext from "../../context/productsContext";

const MainProductView = ({}) => {
  const ProductsContext = useContext(productsContext);
  const { products, obtainProducts, firstConsult, loading } = ProductsContext;

  useEffect(() => {
    if (!firstConsult) obtainProducts();
  }, []);

  return (
    <div id="top">
      <div
        className="container pt-5 container-products"
        id="container-products"
      >
        <div className="row">
          <div className="col-2 hidden-sm-down (hidden-sm hidden-xs) = d-none d-md-block">
            col-2
            <Filter />
          </div>
          <div className="col-md-10 col-lg-10 col-xl-10 col-sm-12">
            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <div className="row row-cols-1 row-cols-md-3">
                  <ListProducts products={products} />
                </div>
                <div>
                  <Paginator />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductView;
