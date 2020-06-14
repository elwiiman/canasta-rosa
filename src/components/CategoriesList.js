import React, { useContext } from "react";
import Category from "./Category";

const CategoriesList = ({ categs, toggleListCat }) => {
  return (
    <ul className="list-group list-group-flush">
      {categs.map((category) => (
        <Category
          key={category.slug}
          category={category}
          toggleListCat={toggleListCat}
        />
      ))}
    </ul>
  );
};

export default CategoriesList;
