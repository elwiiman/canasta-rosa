import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CategoriesList from "./components/CategoriesList";
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
    <div className="App">
      <Navbar toggleListCat={toggleListCat} />

      {listCatActive ? <CategoriesList categories={categories} /> : null}
    </div>
  );
}

export default App;
