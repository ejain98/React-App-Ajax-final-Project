import Cards from "./Cards";

function Headers(props) {

 const url =  "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const getRandom = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.drinks[0].strDrink);
      props.setCocktails([...props.cocktails,data.drinks[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="app">
      <h2>Hotel Del lunaa</h2>
      <h3 className="cocktail-head">Cocktails...</h3>
      <button className="custom-btn btn-12" onClick={getRandom}><span>Click!</span><span>Get Random Cocktail</span></button>
    </section>
  );
}

export default Headers;
