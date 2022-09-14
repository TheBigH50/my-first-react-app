import { BrowserRouter, NavLink, Routes, Route, } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages"

function App(props) {

return(
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/films"}>Films</NavLink>
      </li>
      <li>
        <NavLink to={"film/:id"}>Film</NavLink>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/films" element={<FilmsPage /> } />
    <Route path="film/:id" element={<SingleFilmPage /> } />
  </Routes>
  
  </BrowserRouter>
)

}

export default App;
