import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GreatExperienceSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center">
          <div className="position-relative">
            <img
              src="https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7"
              alt="Building"
              className="img-fluid"
              style={{ maxHeight: "250px", borderRadius: "8px" }}
            />
            
          </div>
        </div>
    
        
        <div className="col-md-6">
          <h5 className="text-uppercase text-muted mb-2">About Studio</h5>
          <h2 className="text-dark fw-bold mb-4">Great Experience</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse ultrices gravida.
          </p>
          <button className="btn btn-success d-flex align-items-center gap-2">
            Watch Video <i className="bi bi-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreatExperienceSection;