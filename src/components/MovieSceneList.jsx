import PropTypes from "prop-types";
import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList({movie}) {
  return (
    <ul className="list__ul">
      {movie.map((oneMovie) => (
        <li key={oneMovie.movie + oneMovie.year} className="list__container">
          <MovieSceneItem oneMovie={oneMovie}></MovieSceneItem>
        </li>
      ))}
    </ul>
  );
}

MovieSceneList.propTypes = {
  movie: PropTypes.array,
};

export default MovieSceneList;
