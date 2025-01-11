import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GreatExperienceSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center">
          <div className="position-relative">
            <img
              src="path-to-your-image.jpg"
              alt="Building"
              className="img-fluid"
              style={{ maxHeight: "400px", borderRadius: "8px" }}
            />
            <div
              className="position-absolute"
              style={{
                bottom: "-20px",
                left: "20px",
                backgroundColor: "#fff",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="mb-0 text-dark">
                17 <span className="text-success">YEARS</span>
              </h3>
              <p className="mb-0 text-muted">OF SUCCESSFUL WORK</p>
            </div>
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