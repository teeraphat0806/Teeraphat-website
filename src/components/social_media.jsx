import React from "react";
import "../components/css/soicalmedia.css"; 

const SocialMedia3DIcons = () => {
  return (
    <div className="SocialMedia">
    <ul>
      <li>
        <a href="https://www.facebook.com/?locale=th_TH" className="facebook">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-facebook"></span>
        </a>
      </li>
      <li>
        <a href="" className="phone">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-phone"></span>
        </a>
      </li>
      <li>
        <a href="#" className="instagram">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-github"></span>
        </a>
      </li>
      <li>
        <a href="#" className="linkedin">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-linkedin"></span>
        </a>
      </li>
    </ul>
  </div>
  );
};

export default SocialMedia3DIcons;
