import React from "react";
import Aboutprofile from "../components/aboutmeprofile";
import ProfilDeil from "../components/profiledetail";
import MostUsedLanguages from "../components/programming_laguage";
import Aboutsection from "../components/about_section";
import Mobilelogo from "../components/mobile_logo";
import Websitelogo from "../components/website_logo";
import MobileCarousel from "../components/cardshowmobile";
import CardShow from "../components/cardshow";
import "../components/css/profile_detail.css";
import cardData from '../data/aboutdata';
import WebData from "../data/webdata";


const About = () => {
    
  const featurette1 = {
    title: "MOBILE DEVELOPMENT",
    subtitle: "Flutter and React Native App Developer",
    description:
      "I develop sleek, high-performance apps using Flutter and React Native. With Flutter, I create visually rich, cross-platform apps from a single codebase. React Native lets me deliver native-like performance with web-level flexibility. My goal is to craft apps that are fast, intuitive, and user-focused.",
    imgSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: true, // Default layout
  };
  const featurette2 = {
    title: "WEBSITE PWAs",
    subtitle: "Web Developer: React, Next.js, and PWAs",
    description:
      "I build modern, responsive websites with React and Next.js, focusing on speed and functionality. I also create Progressive Web Apps (PWAs) that blend the best of web and mobile experiences. Every project is designed for performance and user satisfaction.",
    imgSrc:
      "https://www.syncfusion.com/blogs/wp-content/uploads/2023/02/Using-React-18-Features-in-NextJS-1.png",
    reverse: false, // Default layout
  };
  return (
    <div>
      <Aboutsection />

      <div className="d-flex justify-content-center align-items-center py-5 bg-dark">
        <div className="container mt-4 mb-4 px-5 py-2">
          <ProfilDeil data={featurette1} />
          <Mobilelogo />
          <div className="container d-flex flex-column align-items-center">
            {"a"}
            <h3 className="text-uppercase mb-3 neon-flow2 " >
                {'AVALIABLE APP'}
            </h3>
            <CardShow data={cardData} />
          </div>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="w-100" style={{ maxWidth: "500px" }}>
              {" "}
              <MobileCarousel data={cardData} />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center py-5 bg-black">
        <div className="container mt-4 mb-4 px-5 py-2">
          <ProfilDeil data={featurette2} />

          <Websitelogo />
          <div className="container d-flex flex-column align-items-center">
            {"a"}
            <h3 className="text-uppercase mb-3 neon-flow2 " >
                {'AVALIABLE WEBSITE'}
            </h3>
            <CardShow data={WebData} />
          </div>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="w-100" style={{ maxWidth: "500px" }}>
              {" "}
              <MobileCarousel data={WebData} />
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default About;
