import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 py-6">
      <nav className={`
        max-w-3xl w-full rounded-full px-8 py-3
        ${scrolled ? 'bg-white/10' : 'bg-transparent'}
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        border border-white/10
      `}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-white font-bold text-xl relative group"
          >
            <span className="relative z-10">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {['Home', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-white/90 hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;