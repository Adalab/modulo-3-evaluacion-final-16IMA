import "../styles/App.scss";
import "../components/Layout/Header";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
import MovieSceneList from "../components/MovieSceneList";

function App() {

  // VARIABLES DE ESTADO

  const [movie, setMovie] = useState()

  return (
    <>
      <Header></Header>
      <main>
        <section className="list">
        <MovieSceneList movie={movie}></MovieSceneList>  
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
