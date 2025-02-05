import '../styles/App.scss';

function App() {
  return (
    <>
    <header className="header">
      <h1 className="header__tittle">OWEN WILSON&aposS &quotWOW&quot</h1>
    </header>
    <main>
    <section className="search">
        <label className="label__text" htmlFor="name-select">Movie</label>
        <input type="search" className="search__movie" id="name-select"/>
        <label className="label__text" htmlFor="pet-select">Year</label>
        <select name="year" id="year-select">
          <option value="">All</option>
          <option value="1990">1990</option>
          <option value="2000">2000</option>
          <option value="2010">2010</option>
          <option value="2020">2020</option>
          <option value="2025">2025</option>
        </select>
    </section>
    <section className='list'>
      <ul className="list__ul">
        <li className="list__container">
          <img src="" alt="" className='list__container-movieImg'/>
          <p className="list__container-movieData"></p>
          <h3 className="list__container-wowLine"></h3>
        </li>
      </ul> 
    </section>
    <footer className="footer">
      <p className="footer__p">Powered by <a href="https://owen-wilson-wow-api.onrender.com/">The MovieDB</a></p> 
      <p className="footer__p">Data provided by <a href="https://www.themoviedb.org/">The MovieDB</a></p>
      <p className="footer__p">All rights reserved &copy; 2021 Owen Wilson</p>  
      </footer>
    </main>
    </>
  )
}

export default App;
