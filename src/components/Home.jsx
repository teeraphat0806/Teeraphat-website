import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cardprofile';
import CardDetil from '../components/carddetails';
import ProfilDeil from '../components/profiledetail';
import Social from '../components/social_media';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <br />
      </div>

      <div>
        <Card />
        <br />
      </div>

      <div className="container mt-4 mb-4 px-5 py-2">
        <CardDetil />
      </div>

      <div className="container mt-4 mb-4 px-5 py-2">
        <ProfilDeil />
      </div>

      <hr className="featurette-divider" />

      <div className="container px-5 py-5">
        <Social />
      </div>
    </div>
  );
};

export default Home;
