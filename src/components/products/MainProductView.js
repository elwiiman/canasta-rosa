import React, { useContext, useEffect, Fragment } from "react";
import ListProducts from "./ListProducts";
import Paginator from "../layout/Paginator";
import Spinner from "../loading/Spinner";
import Filter from "../filter/Filter";
import Header from "../layout/Header";

import productsContext from "../../context/productsContext";

const MainProductView = ({ categories }) => {
  const ProductsContext = useContext(productsContext);
  const { products, obtainProducts, firstConsult, loading } = ProductsContext;

  useEffect(() => {
    if (!firstConsult) obtainProducts();
  }, []);

  return (
    <div
      className="container-fluid pt-5  container-products"
      id="container-products"
    >
      <div className="row">
        <div className="col-2  pl-lg-4 hidden-md-down (hidden-md hidden-sm hidden-xs) = d-none d-lg-block">
          <Filter />
        </div>
        <div className="pl-lg-5 col-md-12 col-lg-10 col-xl-10 col-sm-12">
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              {products.length !== 0 && firstConsult === true ? (
                <Fragment>
                  <div className="row ">
                    <div className="col">
                      <Header />
                    </div>
                  </div>

                  <div className="row row-cols-1 row-cols-md-3">
                    <ListProducts products={products} />
                  </div>
                  <div>
                    <Paginator />
                  </div>
                </Fragment>
              ) : (
                <div className="row row-cols-1 row-cols-md-3">
                  <h5 className="text-center">No se encontraron resultados</h5>
                </div>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainProductView;
