import React, { useState, useEffect } from "react";
import banner1 from "../assets/palm-banner1.jpg";

function HeroSection() {

  const images = [
    banner1,
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
    
      {/* Images */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
      >
        {images.map((image, index) => (
          <div
            key={index}
            
            className={`w-full h-full flex-shrink-0 `}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`hero-image`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;