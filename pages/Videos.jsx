import React from "react";

const Videos = () => {
  //   const videoSrc = "https://youtu.be/7mP2TFNxUNI"; // Replace with your actual YouTube video URL
  return (
    <div className="relative overflow-hidden w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        src="https://www.youtube.com/embed/fJje8GEHrsU"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Videos;
