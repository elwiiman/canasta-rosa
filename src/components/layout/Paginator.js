import React, { useContext } from "react";
import productsContext from "../../context/productsContext";

const Paginator = () => {
  const ProductsContext = useContext(productsContext);
  const { obtainProducts, next, previous } = ProductsContext;

  //move screen to top
  const moveScreen = () => {
    const element = document.getElementById("top");
    const headerOffset = 45;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${previous === null ? "disabled" : "enabled"}`}
        >
          <button
            className="page-link"
            onClick={() => {
              obtainProducts(previous);
              moveScreen();
            }}
          >
            Anterior
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">2</button>
        </li>
        <li className="page-item">
          <button className="page-link">3</button>
        </li>
        <li className={`page-item ${next === null ? "disabled" : "enabled"}`}>
          <button
            className="page-link"
            onClick={() => {
              obtainProducts(next);
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
