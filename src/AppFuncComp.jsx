import { useState } from "react";
import FilmsListFuncComp from "./filmListFuncComp";

function AppFuncComp(props) {

let [list, setList] = useState(["ready", "set", "GO"]);
let [text, setText] = useState("");

function onSubmit(event) {
    event.preventDefault();

let newList = [...list, text];
setList({newList, text});
}

    return (
        <div>
          <h1>Hello World</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText({ text: e.target.value })}
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {list.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
          <FilmsListFuncComp />
        </div>
      );
}

export default AppFuncComp;