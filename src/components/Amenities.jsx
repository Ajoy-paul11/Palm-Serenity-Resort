import React from "react";
import aminity1 from "../assets/aminity/palm-aminity1.png";
import aminity2 from "../assets/aminity/palm-aminity2.png";
import aminity3 from "../assets/aminity/palm-aminity3.png";
import aminity4 from "../assets/aminity/palm-aminity4.png";
import aminity5 from "../assets/aminity/palm-aminity5.png";
import aminity6 from "../assets/aminity/palm-aminity6.png";
import aminity7 from "../assets/aminity/palm-aminity7.png";
import aminity8 from "../assets/aminity/palm-aminity8.png";
import aminity9 from "../assets/aminity/palm-aminity9.png";
import aminity10 from "../assets/aminity/palm-aminity10.png";
import aminity11 from "../assets/aminity/palm-aminity11.png";
import aminity12 from "../assets/aminity/palm-aminity12.png";

function Amenities() {
  const amenities = [
    {
      icon: aminity1,
      title: "Swimming Pool with Deck",
    },
    {
      icon: aminity2,
      title: "Yoga Pavilion",
    },
    {
      icon: aminity3,
      title: "Club House",
    },
    {
      icon: aminity4,
      title: "Hammock Lawn",
    },
    {
      icon: aminity5,
      title: "Party Lawn",
    },
    {
      icon: aminity6,
      title: "Cascading Waterfall",
    },
    {
      icon: aminity7,
      title: "Barbeque Area",
    },
    {
      icon: aminity8,
      title: "Kids Play Area",
    },
    {
      icon: aminity9,
      title: "24/7 Security with CCTV",
    },
    {
      icon: aminity10,
      title: "Tropical Lawn",
    },
    {
      icon: aminity11,
      title: "Multi-Hoop Basketball Court",
    },
    {
      icon: aminity12,
      title: "Bonfire Area",
    },
  ];
  return (
    <section id="amenities" className=" py-16 ">
      <div className=" container mx-auto px-4">
        <div className=" w-[180px] h-[40px] mx-auto my-4 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
          <h2 className=" text-white text-xl lg:text-3xl font-bold">Amenities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
              <img 
                  src={amenity.icon} 
                  alt={amenity.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2 primary-text-color text-center  ">{amenity.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
