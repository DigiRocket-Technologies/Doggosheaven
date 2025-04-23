import React from 'react';

const Vedio = () => {
  return (
    <div className="w-full py-16 px-8 flex items-center justify-center bg-white">
      <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="./v1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Vedio;
