import { useState, useEffect } from "react";

function FilmsListFuncComp(props) {

    let [list, setList] = useState([])

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
        <ul>
       {list.map((film) => (
              <li key={film.id}>{film.title}</li>
            ))}
        </ul>
      );
}

export default FilmsListFuncComp;