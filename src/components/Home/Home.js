import React from "react";
import "./Home.css";

let Center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

const Home = () => (
  <div className="Home" data-testid="Home">
    <div style={Center}>
      <h1 style={{ marginTop: "45vh", maxWidth: "90%"}}>
        Welcome to The Caveman Starter Page!
      </h1>
    </div>
  </div>
);

export default Home;
