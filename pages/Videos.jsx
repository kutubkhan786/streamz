import React from "react";

const Videos = () => {
  return (
    <div className="relative overflow-hidden w-full pt-[56.25%] iframe">
      <iframe
        style={{ width: '100%', height: '60%', overflow: 'visible' }}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        src="https://www.youtube.com/embed/fJje8GEHrsU"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Videos;
