import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/css/navbarcss.css'; // Import the CSS file for styles

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Korn</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section>
        <div
          id="intro"
          className="bg-image d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582061575118-93cc82eca33b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            height: "100vh",
          }}
        >
          <div
            className="mask w-100 text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <h1 className="mb-0 text-white display-1">Internship</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;