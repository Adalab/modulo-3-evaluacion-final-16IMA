import "../styles/App.scss";
import "../components/Layout/Header";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useEffect, useState } from "react";
import MovieSceneList from "../components/MovieSceneList";

function App() {
  // VARIABLES DE ESTADO

  const [movie, setMovie] = useState([]);
  
  //Fetch

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then(response => response.json())
      .then(dataJson => {
        setMovie(dataJson);
      });
  }, []);

  console.log(movie);
  
  return (
    <>
      <Header></Header>
      <main>
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
