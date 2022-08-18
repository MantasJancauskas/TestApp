import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";
import { Link, Outlet } from "react-router-dom";

const Movies = () => (
    <>
        <div className="p-3" data-testid="Movies">
            Movies Component
        </div>
        <div className="p-3">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/movies/top-10-movies">
                        Top 10 Movies
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/movies/worst-movies">
                        Worst Movies
                    </Link>
                </li>
            </ul>
            <Outlet className="px-5" />
        </div>
    </>
);
