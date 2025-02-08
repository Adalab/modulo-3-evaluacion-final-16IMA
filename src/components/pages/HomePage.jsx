import Filter from "../Filter";
import MovieSceneList from "../MovieSceneList";
import PropTypes from "prop-types";

function HomePage({ movie, movieTitle, handleInputFilterTitle, handleSelectFilterYear, movieYear }) {

  return (
    <>
      <Filter movieTitle={movieTitle} 
        handleInputFilterTitle={handleInputFilterTitle}
        movie={movie}
        handleSelectFilterYear={handleSelectFilterYear}
        movieYear={movieYear}        
      ></Filter>
      {
        movie.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          <MovieSceneList movie={movie}></MovieSceneList>
        )
  }
    </>
  );
}

HomePage.propTypes = {
  movie: PropTypes.array,
  movieTitle: PropTypes.string,
  handleInputFilterTitle: PropTypes.func,
  handleSelectFilterYear: PropTypes.func,
  movieYear: PropTypes.number,
};

export default HomePage;
