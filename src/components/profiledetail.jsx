import React from "react";
import { Card } from "react-bootstrap";

const ProfileDeil = ({ data }) => {
  // Destructure the data object with default values
  const { title, subtitle, description, imgSrc, reverse = false } = data || {};

  return (
    <div className={"row featurette "}>
      {/* Text Section */}
      <div className={`col-md-7 ${reverse ? "order-md-2" : "order"}`}>
        <h2 className="featurette-heading fw-normal lh-1">
          {title} <span className="text-body-secondary">{subtitle}</span>
        </h2>
        <p className="lead">{description}</p>
      </div>
      {/* Image Section */}
      <div className="col-md-5">
        <Card>
          <Card.Img src={imgSrc} alt={title} />
        </Card>
      </div>
    </div>
  );
};

export default ProfileDeil;
