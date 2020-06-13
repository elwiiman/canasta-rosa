import React from "react";

const Category = ({ category }) => {
  return <li className="list-group-item">{category.name}</li>;
};

export default Category;
