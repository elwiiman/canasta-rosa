import React from "react";
import Category from "./Category";

const CategoriesList = ({ categories }) => {
  return (
    <ul className="list-group list-group-flush">
      {categories.map((category) => (
        <Category key={category.slug} category={category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
