import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/css/mobilemenucss.css";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mobile-menu">
      <div className="mobile-menu-header">
        {/* Logo */}
        <NavLink className="mobile-menu-logo text-cyberpunk" to="/" onClick={() => setIsMenuOpen(false)}>
          AMT
        </NavLink>

        {/* Menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} style={{ color: "#FFD700" }}></i>
        </button>
      </div>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-items">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
      )}
    </nav>
  );
};

export default MobileMenu;
