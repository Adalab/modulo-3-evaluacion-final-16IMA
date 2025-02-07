import MovieYearList from "./MovieYearList";

function Filter({handleInputFilterTitle, movieTitle, movie, handleSelectFilterYear}) {
  return (
    <form className="search" action="">
      <label className="label__text" htmlFor="name-select">
        Movie
      </label>
      <input
        type="search"
        name="search"
        className="search__movie"
        placeholder="Filter by title"
        id="name-select"
        value={movieTitle}
        autoComplete="off"
        onInput={handleInputFilterTitle}           
      />
      <label className="label__text" htmlFor="pet-select">
        Year
      </label>
      <MovieYearList movie={movie} handleSelectFilterYear={handleSelectFilterYear}></MovieYearList>
    </form>
  );
}

export default Filter;
