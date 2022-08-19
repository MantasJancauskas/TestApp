function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/movies" element={<Movies />}>
                    <Route index element={<Top10Movies />} />
                    <Route path="top-10-movies" element={<Top10Movies />} />
                    <Route path="worst-movies" element={<WorstMovies />} />
                </Route>
                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}


import { NavLink, Link } from "react-router-dom";
function Header() {
    return (
        <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Awesome App
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"a
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            style={({ isActive }) => {
                                return { 
                                color: isActive ? "orange" : "",
                      backgroundColor: isActive ?  "black" : "",
 };
                            }}
                            to="/movies"
                        >
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
