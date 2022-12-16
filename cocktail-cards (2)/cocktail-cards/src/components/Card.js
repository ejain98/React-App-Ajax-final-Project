function Card(cocktail) {
  // const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = cocktail.info;
  // console.log(cocktail.src);

  return (
    <div className="flexBox">
      <div className="cocktail">
        <img
          src={cocktail.src}
          alt="Morty Smith"
          className="cocktail-img-top"
          style={{ height: "200px", width: "300px" }}
        />
      </div>
      <div className="cocktail-body">
        <h3 className="cocktail-title">Name: {cocktail.name}</h3>
        <p><strong>Type:</strong> {cocktail.type}</p>
      </div>
    </div>
  );
}

export default Card;
