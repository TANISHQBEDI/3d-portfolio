import { useState, useEffect } from 'react'
import './App.css'

import Scene from './components/Scene'
import ScrollAnimation from './components/ScrollAnimation'
import ScrollComp from './components/ScrollComp'
import Navbar from './components/Navbar'
import MobileAnimation from './components/MobileAnimation'

function App() {
  const sectionHeight = window.innerHeight;
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-white">
      <Navbar/>

      {/* Render ScrollAnimation for wide screens, ScrollComp for portrait screens */}
      {isWideScreen ? <ScrollAnimation /> : <MobileAnimation />}

      {/* <ScrollAnimation /> */}
      {/* <ScrollComp/> */}
      
      <div id='projects' className="z-50 h-screen flex items-center justify-center bg-amber-300 flex-col">
        <h1 className="text-4xl font-bold">Projects Section</h1>
        <h1>Coming Soon</h1>
      </div>
    </div>
  )
}

export default App
