import PropTypes from "prop-types";
import { useParams } from "react-router";


function MovieSceneDetail({findSceneMovie}) {
const params = useParams();

const scene = findSceneMovie(params.timestamp);
//const scenes = [];
//scenes.push(scene);

//localStorage.setItem('detailScenes', JSON.stringify(scenes));

  return (
    <>
      <section>
        <img
          src={scene.poster}
          alt={"Poster of" +  scene.movie }
          className=""
        />
        <h1 className="">{scene.movie}</h1>
        <h2 className="">{scene.full_line}</h2>
        <h2 className="">Director: {scene.director}</h2>
        <h3 className=""><a href={scene.audio}>Escuchar audio</a></h3>
      </section>
    </>
  );
}

MovieSceneDetail.propTypes = {
  findSceneMovie: PropTypes.func,
};

export default MovieSceneDetail;
