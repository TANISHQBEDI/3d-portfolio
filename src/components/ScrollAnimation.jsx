import React, { useRef, useEffect, useState } from "react";
import Name from "../sections/Name";
import Introduction from "../sections/Introduction";
import EduDetails from "../sections/EduDetails";
import ProjectsTitle from "../sections/ProjectsTitle";

function getCurrentFrame(index) {
  // return `/frames/${index.toString().padStart(4, "0")}.png`;
  return `/compressedImages/${index.toString().padStart(4, "0")}.jpg`;
}

const ScrollComp = ({ numFrames = 240 }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Dynamic sizes based on viewport
  const scrollHeight = 400 * window.innerHeight / 100; // 400vh
  const width = window.innerWidth ; // 100vw
  const height = window.innerHeight; // 100vh
  // const width = 100 * window.innerWidth / 100; // 100vw
  // const height = 100 * window.innerHeight / 100; // 100vh

  // ✅ Step 1: Preload images efficiently
  useEffect(() => {
    const loadImages = async () => {
      const imageArray = await Promise.all(
        Array.from({ length: numFrames }, (_, i) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = getCurrentFrame(i + 1);
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(imageArray);
      setImagesLoaded(true);
    };

    loadImages();
  }, [numFrames]);

  // ✅ Step 2: Handle scroll snapping
  const handleScroll = () => {
    if (!imagesLoaded) return;

    const scrollY = window.scrollY;
    const sectionHeight = scrollHeight / 4;

    // Keep canvas fixed until Section 4
    setIsFixed(scrollY < sectionHeight * 3);

    // Determine the correct frame index based on sections
    let frame;
    if (scrollY < sectionHeight) {
      frame = Math.min(60, Math.ceil((scrollY / sectionHeight) * 60));
    } else if (scrollY < sectionHeight * 2) {
      frame = 60 + Math.min(90, Math.ceil(((scrollY - sectionHeight) / sectionHeight) * 90));
    } else if (scrollY < sectionHeight * 3) {
      frame = 150 + Math.min(90, Math.ceil(((scrollY - sectionHeight * 2) / sectionHeight) * 90));
    } else {
      frame = numFrames - 1; // Stay on last frame
    }

    if (frame >= 0 && frame < images.length) {
      setFrameIndex(frame);
    }
  };

  // ✅ Step 3: Set up canvas & attach scroll listener
  useEffect(() => {
    if (!canvasRef.current || !imagesLoaded) return;

    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded]);

  // ✅ Step 4: Render images to canvas
  // useEffect(() => {
  //   if (!canvasRef.current || images.length === 0) return;

  //   const context = canvasRef.current.getContext("2d");
  //   if (!images[frameIndex]) return;

  //   context.clearRect(0, 0, width, height);
  //   context.drawImage(images[frameIndex], 0, 0);
  // }, [frameIndex, images]);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const context = canvasRef.current.getContext("2d");
    if (!images[frameIndex]) return;

    const img = images[frameIndex];
    const imgAspectRatio = img.width / img.height;

    // Scale the image to fit either the width or height of the viewport
    let newWidth, newHeight;

    // Scale based on width
    if (width / height > imgAspectRatio) {
      newWidth = width;
      newHeight = width / imgAspectRatio;
    } else {
      // Scale based on height
      newHeight = height;
      newWidth = height * imgAspectRatio;
    }

    // Clear canvas and draw image with correct scaling
    context.clearRect(0, 0, width, height);
    context.drawImage(img, (width - newWidth) / 2, (height - newHeight) / 2, newWidth, newHeight);
  }, [frameIndex, images]);

  return (
    <div style={{ height: `${scrollHeight}px` }} >
      {/* <div className="h-[100vh] w-[100vw]"
        style={{
          background: "radial-gradient(circle at 50% 50%, #b0b0b0, #444)",
      }}
      > */}
        <canvas
          className={`h-[100vh] w-[100vw] ${isFixed ? "fixed" : "absolute"} ${isFixed ? "" : "top-[300vh]"}  top-0 left-0 -z-10`}
          ref={canvasRef}
          style={{
            background: "radial-gradient(circle at 50% 50%, #b0b0b0, #444)",
        }}
        />
      {/* </div> */}
      
      <div className="snap-y snap-mandatory overflow-y-scroll">
        <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
          <Name/>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
          <Introduction/>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center  snap-section">
          <EduDetails/>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
          <ProjectsTitle/>
        </div>
      </div>
      

    </div>
  );
};

export default ScrollComp;
