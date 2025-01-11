import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import Navbar from "./components/navbar.jsx";
import Aboutme from "./page/About.jsx";
import MobileMenu from "./components/menubar.jsx";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to determine which component to show
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Switch to MobileMenu if width <= 991px
    };

    // Initial check and add listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Conditional rendering for Navbar or MobileMenu */}
      {isMobile ? <MobileMenu /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
      </>
  );
}

export default App;
