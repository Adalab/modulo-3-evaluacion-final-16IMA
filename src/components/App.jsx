import "../styles/App.scss";
import "../components/Layout/Header";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="list">
          <ul className="list__ul">
            <li className="list__container">
              <img src="" alt="" className="list__container-movieImg" />
              <p className="list__container-movieData"></p>
              <h3 className="list__container-wowLine"></h3>
            </li>
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
