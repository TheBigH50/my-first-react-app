import { useState, useEffect } from "react";
import { filterFilmsByDirector } from "../helpers/film.helpers";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

let filteredFilms = filterFilmsByDirector(list, searchDirector);

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
          </select>
        </div>
      </form>
      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
