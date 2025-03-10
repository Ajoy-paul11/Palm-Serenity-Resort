import React from "react";
import { Link } from "react-router";
import brochure from "../assets/Palm-Brochure.pdf";

function ProjectConfiguration() {
  return (
    <div className=" h-[400px] p-6 md:p-10">
      <div className=" container mx-auto w-full h-full flex flex-col items-center justify-center gap-12">
        <h2 className=" text-center text-2xl md:text-4xl text-white font-semibold font-serif">
          PROJECT CONFIGURATION
        </h2>
        <div className=" flex flex-col items-center justify-center w-full lg:w-2/3">
          <div className=" w-full flex items-center justify-evenly gap-4 bg-white text-black py-3 text-sm md:text-base rounded-t-md">
            <p>Type</p>
            <p className=" pl-[20px] md:pl-[36px]">Builtup Area (Sq.ft)</p>
            <p>Price</p>
          </div>
          <div className=" w-full flex items-center justify-evenly gap-4 bg-white/70 text-black py-3 text-sm md:text-lg font-semibold rounded-b-md">
            <p className=" text-center">Premium Resort Plots</p>
            <p className=" pl-[12px] md:pl-0">6000 sq.ft Onwards</p>
            <div>
              <a
                className=" bg-[#16A085] text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-lg"
                href={brochure}
                download="PalmSerenityResortPlot-Brochure"
              >
                {" "}
                Unlock Price{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectConfiguration;
