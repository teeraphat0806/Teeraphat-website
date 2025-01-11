import React from 'react';
import Aboutme from '../components/aboutme'
import '../components/css/navbarcss.css'; // Import the CSS file for styles

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll" data-mdb-navbar-init>
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">Korn</a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#aboutme">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#!">Contact</a>
              </li>

            </ul>
           
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/* Section: Design Block */}
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
      {/* Section: Design Block */}
    </>
  );
};

export default Navbar;
