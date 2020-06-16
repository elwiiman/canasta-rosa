import React, { useContext } from "react";
import productsContext from "../context/productsContext";

const Category = ({ category, toggleListCat }) => {
  const ProductsContext = useContext(productsContext);
  const { obtainProducts } = ProductsContext;

  return (
    <button
      className="list-group-item btn-category"
      onClick={() => {
        obtainProducts(
          `/products/?category__slug=${category.slug}`,
          category.slug,
          category.name
        );
        toggleListCat();
      }}
    >
      {category.name}
    </button>
  );
};

export default Category;
