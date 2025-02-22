import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/notionlogo.css';
import myImage from "../../public/images/me3.jpg";
const Card = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side: Notion Logo + Title + Subtitle */}
        <div className="col-md-8 text-center text-md-start">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              alt="Notion Logo"
              className="me-3"
              width="100" // Adjust Notion logo size
            />
            <h1 className="display-4 fw-bold mb-0">MY BLoG</h1>
          </div>
          
          {/* Subtitle */}
          <h3 className="fw-normal text-muted mt-3">
            Seeing All My Learning Programming Coding
          </h3>

          {/* Learn More Button */}
          <div className="mt-4">
            <a
              className="btn btn-dark text-white"
              href="https://bird-nail-e2b.notion.site/Project-Learning-1111fc6d6740808cba62fd04b3b89f7d?pvs=4"
            >
              Learn more
            </a>
          </div>
        </div>
        
        {/* Right Side: Google Drive Image (Only on Desktop) */}
        <div className="col-md-4 text-center d-none d-md-block">
          <img
             src={myImage}
            alt="Google Drive Image"
            className="img-fluid transparent-image"
            style={{ maxWidth: "110%" ,marginBottom: "-100px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
