import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <p>
          I think I am going to love React.
        </p>
        <ul>
          <li>React</li>
          <li>Is</li>
          <li>Great</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
