import MovieYearList from "./MovieYearList";
import PropTypes from "prop-types";

function Filter({ handleInputFilterTitle, movieTitle, movie, handleSelectFilterYear, handleSubmit}) {

  return (
    <form onSubmit={handleSubmit}>
      <div className="search" action="">
        <p className="search__explanation">Did you know that Owen Wilson says "Wow!" in every movie he appears in? Here, you can explore the scenes from each of his films where we can hear his brilliant "Wow!"</p>
        <label className="search__label-text" htmlFor="name-select">
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
        <label className="search__label-text" htmlFor="year-select">
          Year
        </label>
        <MovieYearList
          movie={movie}
          handleSelectFilterYear={handleSelectFilterYear}
        ></MovieYearList>
      </div>
    </form>
  );
}

Filter.propTypes = {
  movie: PropTypes.array,
  movieTitle: PropTypes.string,
  handleInputFilterTitle: PropTypes.func,
  handleSelectFilterYear: PropTypes.func,
  handleSubmit: PropTypes.func,
};


export default Filter;
