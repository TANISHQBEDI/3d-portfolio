import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsTitle() {
  const [text, setText] = useState("");
  const fullText = "Check Projects Below";
  const titleRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const typeText = (fullText, setText) => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
  
    return () => clearInterval(interval); // Cleanup function
  };

  useEffect(() => {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }, []);
  

  return (
    <div className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      <h1
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-200"
      >
        {text}
      </h1>
    </div>
  );
}

export default ProjectsTitle;
