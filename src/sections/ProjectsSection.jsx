import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Smart Attendance System",
      description: "Face recognition system utilizing Haar Cascade and LBPH algorithm",
      details: [
        "Developed a face recognition system utilizing Haar Cascade for face detection and the LBPH algorithm for feature extraction and recognition, integrated seamlessly with React.",
        "Focused primarily on the backend implementation, leveraging Express for React and Flask for Python.",
        "Contributed to the publication of a paper in the TIJER journal as part of the coursework degree."
      ],
      tech: ["React", "Express", "Flask", "Python", "OpenCV"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
        "title": "Cricket Chatbot",
        "description": "Developed an AI-powered chatbot that answers cricket-related queries using a structured dataset.",
        "details": [
          "Implemented a cricket-specific chatbot capable of answering queries using a SQL-based retrieval system and vector search.",
          "Optimized response generation by integrating CrewAI with efficient database querying, improving performance and accuracy.",
          "Developed a data pipeline to handle large historical datasets and real-time API updates for up-to-date responses.",
          "Designed and fine-tuned prompt engineering for better context understanding and natural language processing.",
          "Implemented streaming responses using Hugging Face’s inference API to enhance user experience with faster answers."
        ],
        "tech": ["Python", "SQL", "CrewAI", "LangChain", "Hugging Face", "FastAPI"],
        "links": {
          "github": "#",
          "live": "#"
        }
      }
      
    // Add more projects here with the same structure
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div id='projects' className="min-h-screen w-full bg-transparent flex items-center justify-center p-8">
      <div className="max-w-7xl w-full relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-5xl font-bold mb-4 text-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Carousel */}
        <div className="relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ 
                rotateY: 90,
                opacity: 0,
                scale: 0.8
              }}
              animate={{ 
                rotateY: 0,
                opacity: 1,
                scale: 1
              }}
              exit={{ 
                rotateY: -90,
                opacity: 0,
                scale: 0.8
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project Visual */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-lg p-6 h-full">
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {/* <a href={projects[currentIndex].links.github} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                        <FaGithub size={20} />
                        <span>Source</span>
                      </a> */}
                      {/* <a href={projects[currentIndex].links.live} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                        <FaExternalLinkSquareAlt size={20} />
                        <span>Live Demo</span>
                      </a> */}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {projects[currentIndex].details.map((detail, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex gap-4 text-gray-300"
                      >
                        <span className="text-blue-400">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-500/50 transition-colors"
          >
            <MdOutlineKeyboardArrowLeft size={30} />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-500/50 transition-colors"
          >
            <MdOutlineKeyboardArrowRight size={30} />
          </button>
        </div>

        {/* Project Counter */}
        <div className="mt-8 text-center text-gray-400">
          <span className="text-white">{currentIndex + 1}</span>
          <span> / {projects.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;