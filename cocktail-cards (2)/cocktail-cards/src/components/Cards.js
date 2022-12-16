import Card from "./Card";
function Cards(cocktails) {
  // console.log(cocktails.data);
  if (cocktails.data === null) {
    return(
      <h2 className="section-title">no cocktails matched your search criteria</h2>
    )
  }

  return (
    <div className="flex_container">
      {cocktails.data.map((cocktail) => (
        <Card
          key={cocktail.idDrink}
          src={cocktail.strDrinkThumb}
          name={cocktail.strDrink}
          type={cocktail.strAlcoholic}
        />
      ))}
    </div>
  );
}

export default Cards;
