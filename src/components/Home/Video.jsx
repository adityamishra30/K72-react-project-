import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757273450~exp=1757277050~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=234ba279e1e4aaac562ca4bffd9cc3faba985318dececced253b207e2ff3073e&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
