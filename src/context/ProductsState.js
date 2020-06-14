import React, { useReducer } from "react";

import productsContext from "./productsContext";
import productsReducer from "./productsReducer";

import axiosClient from "../config/axios";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    slug: "",
    next: null,
    previous: null,
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Obtain products
  const obtainProducts = async (url = "/products/") => {
    const response = await axiosClient.get(url);
    dispatch({ type: "CALL_ALL_PRODUCTS", payload: response.data });
  };

  // const nextPageProducts = async () => {
  //   const response = await axiosClient.get(url - next);
  //   dispatch({type: "NEXT_PAGE_PRODUCTS", payload: response.data})
  // };

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        slug: state.slug,
        next: state.next,
        previous: state.previous,
        obtainProducts,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
