import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Movies from "./Movies/Movies";
import Top10Movies from "./Top10Movies/Top10Movies";
import WorstMovies from "./WorstMovies/WorstMovies";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/movies" element={<Movies />}>
                    <Route path="top-10-movies" element={<Top10Movies />} />
                    <Route path="worst-movies" element={<WorstMovies />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
