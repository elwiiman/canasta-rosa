import React, { useReducer } from "react";

import productsContext from "./productsContext";
import productsReducer from "./productsReducer";

import axiosClient from "../config/axios";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    slug: "",
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Obtain products
  const obtainProducts = async () => {
    const response = await axiosClient.get("/products/");
    dispatch({ type: "CALL_ALL_PRODUCTS", payload: response.data.results });
  };

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        slug: state.slug,
        obtainProducts,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
