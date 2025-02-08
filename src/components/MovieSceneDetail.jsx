import PropTypes from "prop-types";

function MovieSceneDetail({oneMovie}) {
  return (
    <>
     <h1>hola</h1>
      <section>
        <img
          src={oneMovie.poster}
          alt={"Poster of" + oneMovie.movie}
          className=""
        />
        <h1 className="">{oneMovie.movie}</h1>
        <h2 className="">{oneMovie.full_line}</h2>
        <h2 className="">Director: {oneMovie.director}</h2>
        <h3 className=""><a>{oneMovie.audio}</a></h3>
      </section>
    </>
  );
}

MovieSceneDetail.propTypes = {
  oneMovie: PropTypes.object,
};

export default MovieSceneDetail;
