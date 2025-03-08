import React, { useState, useEffect } from "react";
import banner1 from "../assets/palm-banner1.jpg";
import { RxCross2 } from "react-icons/rx";
import LeadForm from "./LeadForm";

function HeroSection() {

  const buttonText = "ENQUIRE NOW";
  const [isOpen, setIsOpen] = useState(false);
  

  const images = [
    banner1,
  ];

  return (
    <>
    {isOpen && <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl lg:w-[500px]">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer cta-bg-color  hover:bg-gray-300 rounded-full">
            <RxCross2
              className=" text-white h-5 w-5 hover:text-black duration-200"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
    }
    <div className="relative w-full h-full overflow-hidden">
      <button
          className={`fixed right-0 top-[40%] bg-[#0f6654] text-white z-50 p-1.5 lg:p-2 rounded-l-md shadow-[0_0_10px_rgba(0,0,0,0.25)] shadow-[#16A085] transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          }`}
          onClick={() => setIsOpen(true)}
          
          >
          <div className="flex flex-col items-center">
            {buttonText.split("\n").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <span
                  key={`${wordIndex}-${charIndex}`}
                  className="text-xs lg:text-sm font-semibold"
                  >
                    {char}
                  </span>
                ))}
                {wordIndex === 0 && <div className="h-1 lg:h-2" />}{" "}
                {/* Add space between words */}
              </React.Fragment>
            ))}
          </div>
      </button>
    
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
    </>
  );
}

export default HeroSection;