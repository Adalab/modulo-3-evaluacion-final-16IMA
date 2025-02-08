import MovieYearList from "./MovieYearList";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Filter({ handleInputFilterTitle, movieTitle, movie, handleSelectFilterYear}) {

  useEffect(() => {
    console.log("Props en Filter:", { movieTitle, handleInputFilterTitle, movie, handleSelectFilterYear });
  }, [movieTitle, handleInputFilterTitle, movie, handleSelectFilterYear]);



  return (
    <form>
      <div className="search" action="">
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
        <label className="label__text" htmlFor="year-select">
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
};


export default Filter;
