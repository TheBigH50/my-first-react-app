import { useState } from "react";

function HomePage(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
