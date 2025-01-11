import React from "react";
import Aboutprofile from "../components/aboutmeprofile";
import ProfilDeil from "../components/profiledetail";

const About = () => {
    const featurette1 = {
        title: "Exciting Feature 1",
        subtitle: "It’ll blow your mind.",
        description: "Some great placeholder content for the first featurette here.",
        imgSrc:
            "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
        reverse: true, // Default layout
    };

    return (
        <div>
            <Aboutprofile />

            <hr className="featurette-divider" />
            <div className="container px-5 py-5">
                <ProfilDeil data={featurette1} />
            </div>

        </div>
    )
}
export default About;