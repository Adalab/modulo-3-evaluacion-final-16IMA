import PropTypes from "prop-types";

function MovieSceneDetail({ oneMovie }) {
  return (
    <>
      <section>
        <img
          src={oneMovie.poster}
          alt={"Poster of" + oneMovie.movie}
          className="list__container-movieImg"
        />
        <p className="list__container-movieData">
          {oneMovie.movie} {oneMovie.year}
        </p>
        <h3 className="list__container-wowLine">{oneMovie.full_line}</h3>
      </section>
    </>
  );
}

MovieSceneDetail.propTypes = {
  oneMovie: PropTypes.object,
};

export default MovieSceneDetail;
