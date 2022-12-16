
function SearchForm (props) {

  const handleChange = (e) => {
    e.preventDefault()
    props.setCocktailInput(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" id="name" name="name" value={props.cocktailInput} onChange={handleChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm