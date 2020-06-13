import React from "react";

const Navbar = ({ toggleListCat }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          className="logo"
          src="https://res.cloudinary.com/elwiiman/image/upload/v1592017600/CanastaRosa/canasta-edit1_gfcjfv.png"
          alt="logo"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => toggleListCat()}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end hidden-md-down (hidden-md hidden-sm hidden-xs) = d-none d-lg-block"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav  ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle pointer"
              onClick={() => toggleListCat()}
            >
              Categorías
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
