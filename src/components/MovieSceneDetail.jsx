import PropTypes from "prop-types";
import { useParams, Link } from "react-router";

function MovieSceneDetail({ findSceneMovie }) {
  const params = useParams();

  const scene = findSceneMovie(params.timestamp);
  //const scenes = [];
  //scenes.push(scene);

  //localStorage.setItem('detailScenes', JSON.stringify(scenes));

  return (
    <>
      <section className="detail">
        <div className="detail__container">
          <img
            src={scene.poster}
            alt={"Poster of" + scene.movie}
            className="detail__img"
          />
          <div className="detail__text-container">
            <h1 className="detail__movie">{scene.movie}</h1>
            <h2 className="detail__line">{scene.full_line}</h2>
            <h2 className="detail__director">Director: {scene.director}</h2>
            <h3 className="detail__audio">
              <a href={scene.audio}>Escuchar audio</a>
            </h3>
            <Link className="detail__homeBtn" to="/">HOME</Link>
          </div>
        </div>
      </section>
    </>
  );
}

MovieSceneDetail.propTypes = {
  findSceneMovie: PropTypes.func,
};

export default MovieSceneDetail;
