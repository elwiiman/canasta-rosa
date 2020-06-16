import React, { useReducer } from "react";

import productsContext from "./productsContext";
import productsReducer from "./productsReducer";

import axiosClient from "../config/axios";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    slug: "",
    categName: "",
    page: null,
    next: null,
    previous: null,
    firstConsult: false,
    loading: false,
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Obtain products
  const obtainProducts = async (
    url = "/products/",
    aSlug = "",
    aCategName = ""
  ) => {
    console.log("url called", url);
    loading();
    const response = await axiosClient.get(url);
    dispatch({
      type: "CALL_ALL_PRODUCTS",
      payload: { response: response.data, slug: aSlug, categName: aCategName },
    });
    loadingSuccess();
  };

  const loadingSuccess = () => {
    dispatch({ type: "LOADING_PRODUCTS_SUCCESS" });
  };

  const loading = () => {
    dispatch({ type: "LOADING_PRODUCTS" });
  };

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        slug: state.slug,
        categName: state.categName,
        page: state.page,
        next: state.next,
        previous: state.previous,
        firstConsult: state.firstConsult,
        loading: state.loading,
        obtainProducts,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
