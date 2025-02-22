import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/fadein.css";
import SakuraFalling from "./sakura";

const Homesection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="fade-in">
      <SakuraFalling />
      <div id="intro" className="d-flex align-items-center text-left">
        <div className="container">
          <div className="row align-items-center">
            {/* ✅ Text ด้านซ้าย */}
            <div className="col-lg-6 col-md-8 col-sm-10 text-white text-content">
              <h1 className={`fw-bold text-glow ${isMobile ? "mobile-title" : "desktop-title"}`}>
                FULLSTACK DEVELOPER
              </h1>

              <p className={`text-description ${isMobile ? "mobile-text" : "desktop-text"}`}>
                HI :) My name is T. Here is my Story.
              </p>

              {/* ✅ ปุ่มสีแดงที่ขยายเมื่อ Hover */}
              <a href="https://drive.google.com/uc?export=download&id=17-hkBhpM-aTIAymoY55dDUl6c9gHx1It"  download className="btn custom-red-btn">
                Get My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
