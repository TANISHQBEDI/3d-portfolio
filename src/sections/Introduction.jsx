import React from "react";

function Introduction() {
  return (
    <div id="intro" className="relative h-screen w-full flex items-center justify-center px-6">
      <div className="absolute top-1/2 right-0 sm:right-[10%] md:right-[15%] -translate-y-1/2 w-[90%] sm:w-[70%] md:w-[50%] text-lg sm:text-xl leading-relaxed sm:leading-loose tracking-wide rounded-lg p-5 bg-opacity-80">
        <p>
          Hi! I'm a budding developer with a passion for learning and creating. As I embark on my journey into the world of{" "}
          <span className="text-amber-200 font-bold">Web Development</span> and{" "}
          <span className="text-green-300 font-bold">Artificial Intelligence</span>, this portfolio will serve as a showcase for my growth, projects, and the skills I acquire along the way.
        </p>

        <p className="mt-4">
          I'm excited to dive deeper into coding, experimenting with new technologies, and sharing my progress. While I'm just getting started, I'm eager to build my experience and contribute to impactful projects in the future.
        </p>

        <p className="mt-4">
          Thanks for stopping by—stay tuned as I continue to learn and grow in this dynamic field!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
