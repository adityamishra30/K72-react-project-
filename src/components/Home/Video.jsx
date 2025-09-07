import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757278036~exp=1757281636~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=f865cf6e967d9a760532f1aa272710048414267f0a7d01e2708f89c0fd097104&r=dXMtd2VzdDE%3D"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
