import React from "react";
import { NavLink } from "react-router-dom";
import "../components/css/navbarcss.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand text-cyberpunk">AMT</NavLink>

        {/* Menu toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-justify"></i> {/* Updated Icon */}
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#ff5678", fontWeight: "bold" }
                    : { color: "#fff" }
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutme"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#ff5678", fontWeight: "bold" }
                    : { color: "#fff" }
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
