function Filter(handleInputFilterTitle, movieTitle) {
  return (
    <form className="search">
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
      <select name="year" id="year-select">
        <option value="">All</option>
        <option value="1990">1990</option>
        <option value="2000">2000</option>
        <option value="2010">2010</option>
        <option value="2020">2020</option>
        <option value="2025">2025</option>
      </select>
    </form>
  );
}

export default Filter;
