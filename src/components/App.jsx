//Imports

import "../styles/App.scss";
import "../components/Layout/Header";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  // Variables de estado

  const [movie, setMovie] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");

  // Eventos

  const handleInputFilterTitle = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
    fetch(
      `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${movieTitle}`
    )
      .then((response) => response.json())
      .then((dataJson) => {
        setMovie(dataJson);
      });
    //tienes que pasar el fetch como variable para que se renderice en sceneitem o list
  };

  //Fetch

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then((response) => response.json())
      .then((dataJson) => {
        setMovie(dataJson);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route index element={<HomePage movie={movie} movieTitle={movieTitle} handleInputFilterTitle={handleInputFilterTitle}></HomePage>}></Route>
          <Route path="DetailPage" element={<DetailPage></DetailPage>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
