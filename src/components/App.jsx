//Imports

import "../styles/App.scss";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  
  // Variables de estado

  const [movie, setMovie] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  

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

  // Funciones

  const findSceneMovie = (timestamp) => {
    return movie.find(oneScene => oneScene.timestamp === timestamp);
  }

    //Fetch

    useEffect(() => {
      fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=50&movie=${movieTitle}&year=${movieYear}`)
        .then((response) => response.json())
        .then((dataJson) => {
          setMovie(dataJson);
        });
    }, [movieTitle, movieYear]);


    return (
      <>
        <Header></Header>
        <main>
          <Routes>
            <Route index element={<HomePage movie={movie} movieTitle={movieTitle} handleInputFilterTitle={handleInputFilterTitle} handleSelectFilterYear={handleSelectFilterYear} />} />
            <Route path="detail/:timestamp" element={<DetailPage findSceneMovie={findSceneMovie}/>} />
          </Routes>
        </main>
        <Footer></Footer>
      </>
    );
  }

  export default App;
