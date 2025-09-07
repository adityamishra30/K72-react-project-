import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex item-center uppercase leading-[8vw]">
        The spark for
      </div>
      <div className="text-[9.5vw] justify-center flex item-center uppercase leading-[8vw]">
        all
        <div className="h-[7vw] w-[15.5vw] rounded-full -mt-1 overflow-hidden">
          <Video></Video>
        </div>
        things
      </div>
      <div className="text-[9.5vw] justify-center flex item-center uppercase leading-[8vw]">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
