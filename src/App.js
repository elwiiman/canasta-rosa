import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CategoriesList from "./components/CategoriesList";

function App() {
  const [listCatActive, setListCatActive] = useState(false);

  const toggleListCat = () => {
    setListCatActive(!listCatActive);
    console.log("here");
  };

  return (
    <div className="App">
      <Navbar toggleListCat={toggleListCat} />

      {listCatActive ? <CategoriesList /> : null}
    </div>
  );
}

export default App;
