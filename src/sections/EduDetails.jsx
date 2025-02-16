import React from 'react';

function EduDetails() {
  return (
    <div
      id="edu-details"
      className="relative h-screen w-full flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-4 lg:mx-0 p-6 lg:p-8 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
          Educational Qualifications
        </h2>

        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-white">
            Master of Artificial Intelligence
          </h3>
          <span className="block text-base lg:text-lg text-gray-300">
            2024 - Present
          </span>
          <p className="mt-2 text-base lg:text-lg text-gray-300">
            Pursuing a Master's degree in Artificial Intelligence at RMIT University, focusing on machine learning, computer vision, and data analytics.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-white">
            Bachelor of Computer Science Engineering
          </h3>
          <span className="block text-base lg:text-lg text-gray-300">
            2020 - 2024
          </span>
          <p className="mt-2 text-base lg:text-lg text-gray-300">
            Completed a Bachelor's degree in Computer Science at Pune University, focusing on algorithms, software development, and data structures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EduDetails;