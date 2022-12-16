import React, { useState, useContext, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import SearchForm from "./components/SearchForm";

function App() {

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [cocktails, setCocktails] = useState([]);
  const [cocktailInput, setCocktailInput] = useState("");
  
  const getInitialCocktails = async () => {
    try {
      const response = await fetch(url + "wine");
      const data = await response.json();
      // console.log(data.drinks);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewCocktails = async () => {
    try {
      const response = await fetch(url + cocktailInput);
      const data = await response.json();
      // console.log(data.drinks);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialCocktails();
  }, []);

  useEffect(() => {
    getNewCocktails();
  }, [cocktailInput]);

  return (
    <div>
      <Header setCocktails={setCocktails}
               cocktails={cocktails}/>
      <SearchForm cocktailInput={cocktailInput}
                  setCocktailInput={setCocktailInput}/>
      <Cards  data={cocktails}/>
      <Footer />
    </div>
  );
}

export default App;
