import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cardprofile';
import CardDetil from '../components/carddetails';
import ProfilDeil from '../components/profiledetail';
import Social from '../components/social_media';
import Homesection from '../components/home_section';
import '../components/css/home.css';
import '../components/css/fadein.css';
const Home = () => {
  

  const featurette2 = {
    title: "Software Developer",
    subtitle: "Teeraphat J.",
    description: "Hi! 👋 I’m a software developer. I build mobile apps with Flutter and React Native, and websites with React and Next.js. I work with Firebase, Supabase, and PostgreSQL to create scalable, cloud-powered solutions. Let’s create something awesome! 🚀",
    imgSrc:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
    reverse: true, // Default layout
  };

  return (
    <div >
      <Homesection />
      <div className="fade-in d-flex justify-content-center align-items-center py-5 bg-black">
      <div className="container mt-4 mb-4 px-5 py-2">
        <ProfilDeil data={featurette2} />
        </div>
      </div>
      <div>
        <Card />
        <br />
      </div>


      <div className="d-flex justify-content-center align-items-center py-5 bg-black">
      <div className="column justify-content-center  align-items-center">
      <h1 className="contact-heading">Contact Me</h1>
        <Social />
       </div>
      </div>


    </div>
  );
};

export default Home;
