import React, { useContext } from "react";
import productsContext from "../../context/productsContext";

const Paginator = () => {
  const ProductsContext = useContext(productsContext);
  const { obtainProducts, next, previous, slug, page } = ProductsContext;

  //move screen to top
  const moveScreen = () => {
    const element = document.getElementById("container-products");
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
    });
  };

  //function to construct the jsx html for the li's elements with number in paginator
  const fillPages = () => {
    const arr = [0, 0, 0, 0, 0, 0]; // necessary to iterate 6 times to construct the li's elements
    return arr.map((element, index) => {
      return (
        <li key={index} className="page-item">
          <button
            className="page-link paginator-number"
            onClick={() => {
              obtainProducts(
                `/products/?category__slug=${slug}&page=${page + index}`,
                slug
              );
              moveScreen();
            }}
          >
            {page + index}
          </button>
        </li>
      );
    });
  };

  //calling  fillPages function
  const listOfPages = fillPages();

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${previous === null ? "disabled" : "enabled"}`}
        >
          <button
            className={`page-link ${
              previous === null ? "paginator-number-muted" : "paginator-number"
            }`}
            onClick={() => {
              obtainProducts(previous, slug);
              moveScreen();
            }}
          >
            Anterior
          </button>
        </li>

        {listOfPages}

        <li className={`page-item ${next === null ? "disabled" : "enabled "}`}>
          <button
            className={`page-link ${
              next === null ? "paginator-number-muted" : "paginator-number"
            }`}
            onClick={() => {
              obtainProducts(next, slug);
              moveScreen();
            }}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
