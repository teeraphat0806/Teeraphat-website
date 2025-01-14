import React from "react";
import Aboutprofile from "../components/aboutmeprofile";
import ProfilDeil from "../components/profiledetail";
import MostUsedLanguages from "../components/programming_laguage";
import Aboutsection from '../components/about_section';
import Mobilelogo from '../components/mobile_logo';
import Websitelogo from '../components/website_logo';
const About = () => {
    const featurette1 = {
        title: "MOBILE DEVELOPMENT",
        subtitle: "Flutter and React Native App Developer",
        description: "I develop sleek, high-performance apps using Flutter and React Native. With Flutter, I create visually rich, cross-platform apps from a single codebase. React Native lets me deliver native-like performance with web-level flexibility. My goal is to craft apps that are fast, intuitive, and user-focused.",
        imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqd9RPmNNGZ7U5vPaq0-yjLaTiI1IvK5BJuQ&s",
        reverse: true, // Default layout
    };
    const featurette2 = {
        title: "WEBSITE PWAs",
        subtitle: "Web Developer: React, Next.js, and PWAs",
        description: "I build modern, responsive websites with React and Next.js, focusing on speed and functionality. I also create Progressive Web Apps (PWAs) that blend the best of web and mobile experiences. Every project is designed for performance and user satisfaction.",
        imgSrc:
            "https://www.syncfusion.com/blogs/wp-content/uploads/2023/02/Using-React-18-Features-in-NextJS-1.png",
        reverse: false, // Default layout
    };
    return (
        <div >
            <Aboutsection/>
            
 
           
            <div className="d-flex justify-content-center align-items-center py-5 bg-dark">
            <div className="container mt-4 mb-4 px-5 py-2">
                <ProfilDeil data={featurette1} />
                <Mobilelogo/>


            </div>
            </div>
            <div className="d-flex justify-content-center align-items-center py-5 bg-black">
            <div className="container mt-4 mb-4 px-5 py-2">
                <ProfilDeil data={featurette2} />
                <Websitelogo/>

            </div>
            
            </div>
           
        </div>
    )
}
export default About;