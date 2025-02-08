import Filter from "../Filter";
import MovieSceneList from "../MovieSceneList";
import PropTypes from "prop-types";

function HomePage({ movie, movieTitle, handleInputFilterTitle, handleSelectFilterYear, movieYear, handleSubmit}) {

  return (
    <>
      <Filter movieTitle={movieTitle} 
        handleInputFilterTitle={handleInputFilterTitle}
        movie={movie}
        handleSelectFilterYear={handleSelectFilterYear}
        movieYear={movieYear}  
        handleSubmit={handleSubmit}      
      ></Filter>  
      <MovieSceneList movie={movie} movieTitle={movieTitle}></MovieSceneList>  
    </>
  );
}

HomePage.propTypes = {
  movie: PropTypes.array,
  movieTitle: PropTypes.string,
  handleInputFilterTitle: PropTypes.func,
  handleSelectFilterYear: PropTypes.func,
  movieYear: PropTypes.number,
  handleSubmit: PropTypes.func,
};

export default HomePage;
