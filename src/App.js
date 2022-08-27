import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SequentialStateUpdates from "./components/Todolist/Todolistv2";
import Todov3 from "./components/Todolist/Todolistv3";
import Image4 from "./images/404-error.jpg";
import PassGenz from "./components/PassGenz/PassGenz";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolistv2" element={<SequentialStateUpdates />} />
        <Route path="/todolistv3" element={<Todov3 />} />
        <Route path="/passgenz" element={<PassGenz />} />
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                minHeight: "100vh",
                backgroundImage: `url(${Image4})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></main>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
