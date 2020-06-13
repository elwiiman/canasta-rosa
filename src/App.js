import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import CategoriesList from "./components/CategoriesList";
import MainProductView from "./components/products/MainProductView";
import ProductsState from "./context/ProductsState";
import axiosClient from "./config/axios";

function App() {
  const [listCatActive, setListCatActive] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleListCat = () => {
    setListCatActive(!listCatActive);
    console.log("here");
  };

  const obtainCategories = async () => {
    try {
      const result = await axiosClient.get("/categories/");
      setCategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainCategories();
  }, []);

  return (
    <ProductsState>
      <Navbar toggleListCat={toggleListCat} />
      {listCatActive ? <CategoriesList categories={categories} /> : null}
      {listCatActive ? null : <MainProductView />}
    </ProductsState>
  );
}

export default App;
