import React from "react";

const VideoBackground = ({ trailer }) => {
  return (
    <div className="absolute top-[-10vh] left-0 right-0 -z-10">
      <iframe
        className="aspect-video w-full absolute"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailer.youtube_id +
          "?&autoplay=1&mute=1&rel=1&controls=0"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
