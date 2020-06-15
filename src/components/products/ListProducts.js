import React, { useContext } from "react";
import Product from "./Product";

const ListProducts = ({ products }) => {
  return products.map((product) => (
    <Product key={product.slug} product={product} />
  ));
};

export default ListProducts;
