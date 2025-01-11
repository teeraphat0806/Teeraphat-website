import React, { useEffect, useState } from "react";
import "../components/css/fadein.css";
const Aboutsection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="fade-in">
      <div
        style={{
          backgroundImage:
            "url('https://cdnb.artstation.com/p/assets/images/images/002/265/903/large/marina-ortega-300316-cyberpunk-views-www-artofmarinaortega-com-marinaortega.jpg?1459497174')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)", // Dark overlay
            padding: isMobile ? "20px" : "50px",
            borderRadius: "15px",
            maxWidth: isMobile ? "90%" : "60%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)", // Shadow for depth
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: isMobile ? "2rem" : "3.5rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            Roadmap Developer
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif", // Modern font
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.8",
              color: "#cccccc", // Subtle gray
            }}
          >
         I’m a software developer specializing in mobile apps with Flutter and React Native and web apps with React and Next.js. I use tools like Firebase, Supabase, and PostgreSQL to build scalable, secure solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;