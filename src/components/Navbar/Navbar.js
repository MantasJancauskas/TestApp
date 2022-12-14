import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import cat from "../../images/Halloween-Mandala-Black-Cat-Moon-01837-500x500.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light newColor ">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <img src={cat} alt="cat" className="Cat" />
        </Link>
        <button
          className="navbar-toggler link-light text-light bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/calculator"
              >
                Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/todolistv2"
              >
                Todolistv2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/todolistv3"
              >
                Todolistv3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link link-light"
                }
                to="/passgenz"
              >
                PassGenz
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
