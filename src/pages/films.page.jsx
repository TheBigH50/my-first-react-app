import { useState, useEffect } from "react";

function FilmsPage(props) {

    let [list, setList] = useState([])
    let [searchDirector, setSearchDirector] = useState("")

function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((films) => setList(films))
    .catch((error) => console.error(error));    
}

useEffect(() => {
getFilms();
}, []);

    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <form>
                <div className= "form-group">
                    <label>
                        <select
                        value = {searchDirector}
                        onChange={(e) => setSearchDirector(e.option.value)}
                        >
                        <option value="">All</option>
                            </select></label>
                </div>
            </form>
        <ul>
       {list.map((film) => (
              <li key={film.id}>{film.title}</li>
            ))}
        </ul>
        </div>
      );
}

export default FilmsPage;