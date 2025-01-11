import React from "react";
import "../components/css/profile_detail.css";
import { Card } from "react-bootstrap";

const ProfileDeil = ({ data }) => {
  // Destructure the data object with default values
  const { title, subtitle, description, imgSrc, reverse = false } = data || {};

  return (
    <div
      className="row featurette align-items-center py-5"
     // Black background, white text
    >
      {/* Text Section */}
      <div className={`col-md-6 ${reverse ? "order-md-2" : "order-md-1"} px-4`}>
        <h5 className="text-uppercase mb-3 neon-flow" >
          {title}
        </h5>
        <h2 className="fw-bold mb-4 gradient-text">{subtitle}</h2>
        <p className="text-white mb-4">{description}</p>
      </div>
      {/* Image Section */}
      <div className={`col-md-6 ${reverse ? "order-md-1" : "order-md-2"} px-4`}>
        <Card className="shadow-sm">
          <Card.Img src={imgSrc} alt={title} className="rounded" />
        </Card>
      </div>
    </div>
  );
};

export default ProfileDeil;
