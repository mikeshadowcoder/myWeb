import React from "react";
import "../styles/background.css"; // Import styles

const BackgroundShapes = () => {
  return (
    <>
    {/* <div className="grid-container"></div>
     <div className="shapes-container">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
    </div> */}

    <svg class="bg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g1">
          <stop offset="0%" stop-color="#7c3aed"/>
          <stop offset="100%" stop-color="#22d3ee"/>
        </linearGradient>
      </defs>

      <circle cx="30" cy="40" r="35" fill="url(#g1)" opacity="0.25" />
    </svg>

    </>
  );
};

export default BackgroundShapes;
