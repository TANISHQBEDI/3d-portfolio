import React, { useRef, useEffect, useState } from "react";
import Name from "../sections/Name";
import Introduction from "../sections/Introduction";
import EduDetails from "../sections/EduDetails";
import ProjectsTitle from "../sections/ProjectsTitle";

function MobileAnimation() {
    const scrollHeight = 400 * window.innerHeight / 100; // 400vh
    const [isFixed, setIsFixed] = useState(true);

    // Handle scroll to toggle fixed positioning
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const sectionHeight = scrollHeight / 4;

        // Keep the background fixed until Section 4
        setIsFixed(scrollY < sectionHeight * 3);
    };

    // Attach scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ height: `${scrollHeight}px` }}>
            {/* Fixed/absolute background div */}
            <div
                className={`h-[100vh] w-[100vw] 
                    ${isFixed ? "fixed" : "absolute"} 
                    ${isFixed ? "" : "top-[300vh]"}
                    top-0 left-0 -z-10`
                }
                style={{
                    background: "radial-gradient(circle at 50% 50%, #b0b0b0, #444)",
                }}
            />

            {/* Scrollable sections */}
            <div className="snap-y snap-mandatory overflow-y-scroll">
                <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
                    <Name />
                </div>
                <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
                    <Introduction />
                </div>
                <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
                    <EduDetails />
                </div>
                <div className="h-[100vh] w-[100vw] flex items-center justify-center snap-center snap-section">
                    <ProjectsTitle/>
                </div>
            </div>
        </div>
    );
}

export default MobileAnimation;



