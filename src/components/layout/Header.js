import React, { useContext, Fragment } from "react";
import productsContext from "../../context/productsContext";

const Header = () => {
  const ProductsContext = useContext(productsContext);
  const { categName } = ProductsContext;

  return (
    <Fragment>
      {categName !== "" ? (
        <h3 className="p-3 mb-4 categ-header text-center">{categName}</h3>
      ) : null}
    </Fragment>
  );
};

export default Header;
