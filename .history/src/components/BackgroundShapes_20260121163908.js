import React from "react";
import "../styles/background.css"; // Import styles

const BackgroundShapes = () => {
  return (
    <>
    <div className="grid-container">
      <svg class="bg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1">
            <stop offset="0%" stop-color="#7c3aed"/>
            <stop offset="100%" stop-color="#22d3ee"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="40" r="35" fill="url(#g1)" opacity="0.25" />
      </svg>
      {/* <div className="gradient-blobs" /> */}
    </div>
    </>
  );
};

export default BackgroundShapes;
