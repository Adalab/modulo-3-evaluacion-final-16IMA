function Filter() {
  return (
    <section className="search">
      <label className="label__text" htmlFor="name-select">
        Movie
      </label>
      <input type="search" className="search__movie" id="name-select" />
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
    </section>
  );
}

export default Filter;
