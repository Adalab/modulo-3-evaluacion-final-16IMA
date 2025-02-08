import PropTypes from "prop-types";
import MovieSceneDetail from "../MovieSceneDetail";

function DetailPage({findSceneMovie}) {
    return (        
    <MovieSceneDetail findSceneMovie={findSceneMovie}></MovieSceneDetail>
    )
}

DetailPage.propTypes = {
  findSceneMovie: PropTypes.func,
};

export default DetailPage