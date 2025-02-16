import React from "react";

const Name = () => {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center">
      {/* Center object placeholder area */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        {/* Space for the image sequence */}
      </div>

      {/* Name & Title */}
      <div className="absolute top-1/4 left-8 sm:left-16 md:left-24 lg:left-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
          <span className="block text-white">Tanishq</span>
          <span className="block text-white mt-2">Bedi</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 sm:mt-6 font-light tracking-wider">
          DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Name;
