import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/fadein.css";
const Homesection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Logic to check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set threshold for mobile screens
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="fade-in">
      <div
        id="intro"
        className="bg-image d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage:
            "url('https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/872822c5e50dc71f345416098d29fc3ae5cd26c1-1280x720.jpg')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="mask w-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {/* Heading */}
          <h1
            className="mb-0 text-white display-1 text-glow"
            style={{
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            FULLSTACK DEVELOPER
          </h1>

          {/* Conditional Rendering for Text */}
          {isMobile ? (
            <p
              className="mb-0 text-white"
              style={{
                fontSize: "1.2rem", // Smaller font for mobile
                maxWidth: "90%",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              HI :) I'm T. This is my Story.
            </p>
          ) : (
            <p
              className="mb-0 text-white display-6"
              style={{
                fontSize: "1.5rem", // Larger font for desktop
                maxWidth: "70%",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              HI :) My name is T. Here is my Story.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Homesection;
