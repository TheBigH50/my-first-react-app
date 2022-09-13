import { BrowserRouter, Link, Routes, Route, } from "react-router-dom";
import { HomePage, FilmsPage } from "./pages"

function App(props) {

return(
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/films">Films</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/films" element={<FilmsPage /> } />
  </Routes>
  
  </BrowserRouter>
)

}

export default App;
