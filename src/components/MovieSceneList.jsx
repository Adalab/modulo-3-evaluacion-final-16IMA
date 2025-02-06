import PropTypes from "prop-types";

function MovieSceneList(movie) {

    return(
        <ul className="list__ul">

            {movie.map((oneMovie) =>
              <li key={oneMovie.movie + oneMovie.year} className="list__container">
                <img src={oneMovie.poster} alt="Poster of" + {oneMovie.movie} className="list__container-movieImg"/>
                <p className="list__container-movieData">{oneMovie.movie}</p>
                <h3 className="list__container-wowLine">{oneMovie.full_line}</h3>
              </li>
            )
            }

          </ul>
    )
};

MovieSceneList.propTypes = {
    movie: PropTypes.array
};

export default MovieSceneList;