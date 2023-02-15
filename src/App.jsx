import React from "react";
import ProfileDP from "./components/ProfileImage";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SocialSection from "./components/SocialSection";

function App(){
    return <div className="container">
        <ProfileDP/>
        <IntroSection/>
        <AboutSection/>
        <SocialSection/>
    </div>
}

export default App;