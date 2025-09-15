import React from 'react';
import Video from "../components/home/video";

import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';

const Home = () => {
  return (
    <div className="text-white relative">
      {/* Full-screen video background */}
      <div className="h-screen w-screen fixed top-0 left-0">
        <Video />
        {/* Optional overlay to enhance text readability */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      </div>

      {/* Main content layered over the video */}
      <div className="h-screen w-screen relative pb-5 flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
