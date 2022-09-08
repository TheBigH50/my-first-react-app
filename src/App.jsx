import React from "react";
import FilmsList from "./filmList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({ list: newList, text: "" });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;
