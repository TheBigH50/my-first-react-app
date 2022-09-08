import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], hasLoaded: false };
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((list) => this.setState({ list, hasLoaded: true }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getFilms();
  }
  
  render() {
   // if (this.state.hasLoaded) {
     // return <p>Loading...</p>;
  //  }

    return (
      <ul>
     {this.state.list.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
      </ul>
    );
  }
}

export default FilmsList;
