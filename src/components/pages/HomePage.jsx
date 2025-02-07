import Filter from "../Filter";
import MovieSceneList from "../MovieSceneList";

function HomePage({ movie, movieTitle, handleInputFilterTitle}) {
  <Filter
    movieTitle={movieTitle}
    handleInputFilterTitle={handleInputFilterTitle}
  ></Filter>;
  {
    movie.length === 0 ? (
      <p>No hay resultados</p>
    ) : (
      <MovieSceneList movie={movie}></MovieSceneList>
    );
  }
}

export default HomePage;
