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
  const[movieYear, setMovieYear] = useState("");  

  // Eventos

  const handleInputFilterTitle = (ev) => {
    ev.preventDefault();
    setMovieTitle(ev.target.value);
    
    };
  
  const handleSelectFilterYear = (ev) => {
    ev.preventDefault();
    setMovieYear(ev.target.value);
    console.log(ev.target.value)
      
    };
  
  //Fetch

  useEffect(() => {
    fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=50&movie=${movieTitle}&year=${movieYear}&sort=movie=desc`)
      .then(response => response.json())
      .then(dataJson => {
        setMovie(dataJson);
      });
  }, [movieTitle, movieYear]);

  
  
  return (
    <>
      <Header></Header>
      <main>
        <Filter movieTitle={movieTitle} handleInputFilterTitle={handleInputFilterTitle} movie={movie} handleSelectFilterYear={handleSelectFilterYear} ></Filter>
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
