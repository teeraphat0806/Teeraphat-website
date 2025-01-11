import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cardprofile';
import CardDetil from '../components/carddetails';
import ProfilDeil from '../components/profiledetail';
import Social from '../components/social_media';

const Home = () => {
  const featurette1 = {
    title: "ok T",
    subtitle: "It’ll blow your mind.",
    description: "Some great placeholder content for the first featurette here.",
    imgSrc:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
    reverse: true, // Default layout
  };
  return (
    <div>

      <div>
        <Card />
        <br />
      </div>

      <div className="container mt-4 mb-4 px-5 py-2">
        <CardDetil />
      </div>

      <div className="container px-5 py-5">
        <ProfilDeil data={featurette1} />
      </div>


      <hr className="featurette-divider" />

      <div className="container px-5 py-5">
        <Social />
      </div>
    </div>
  );
};

export default Home;
