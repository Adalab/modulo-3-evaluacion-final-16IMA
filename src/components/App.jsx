import "../styles/App.scss";
import "../components/Layout/Header";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import MovieSceneList from "../components/MovieSceneList";

function App() {
  // VARIABLES DE ESTADO

  const [movie, setMovie] = useState([]);
  const[movieTitle, setMovieTitle] = useState("");  

  // Eventos

  const handleInputFilterTitle = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
    fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?movie=${movieTitle}`)
        .then(response => response.json())
        .then(dataJson => {
          setMovie(dataJson);
        });
        //tienes que pasar el fetch como variable para que se renderice en sceneitem o list
  };
  
  //Fetch

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then(response => response.json())
      .then(dataJson => {
        setMovie(dataJson);
      });
  }, []);

  
  
  return (
    <>
      <Header></Header>
      <main>
        <Filter movieTitle={movieTitle} handleInputFilterTitle={handleInputFilterTitle}></Filter>
        {movie.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          <MovieSceneList movie={movie}></MovieSceneList>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
