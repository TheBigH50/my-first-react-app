import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => {setList(films);
         console.log(films)})
         

      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
    }, []);

let filteredFilms = filterFilmsByDirector(list, searchDirector);
let directors = getListOf(list, "director");
//let { total, avg_score, latest } = getFilmStats(filteredFilms);
let stats = getFilmStats(filteredFilms)
console.log(stats);


  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Filter By Director</label>
          <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director) => (
              <option key={director} value={director}>{director}</option>
            ))}
          </select>
        </div>
      </form>
      <div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latest}</span>
  </div>
</div>
      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
