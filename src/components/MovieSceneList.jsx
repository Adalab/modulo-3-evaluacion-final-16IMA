import PropTypes from "prop-types";
import MovieSceneItem from "./MovieSceneItem";
import { Link } from "react-router";

function MovieSceneList({ movie, movieTitle }) {

  if (movie.length === 0) {
    return <p>No hay resultados con el título {movieTitle}</p>;
  }

  localStorage.setItem('movieScenes', JSON.stringify(movie));
  
  return (
    <ul className="list__ul">
      {movie.map((oneMovie) => (
        <li
          key={oneMovie.movie + oneMovie.timestamp}
          className="list__container"
        >
          <Link to={`/detail/${oneMovie.timestamp}`}>
            <MovieSceneItem oneMovie={oneMovie}></MovieSceneItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieSceneList.propTypes = {
  movie: PropTypes.array,
  movieTitle: PropTypes.string,
};

export default MovieSceneList;
