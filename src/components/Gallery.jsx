import React from 'react'
import image1 from "../assets/gallery/palm-img1.jpg";
import image2 from "../assets/gallery/palm-img2.jpg";
import image3 from "../assets/gallery/palm-img3.jpg";
import image4 from "../assets/gallery/palm-img4.jpg";
import image5 from "../assets/gallery/palm-img5.jpg";
import image6 from "../assets/gallery/palm-img6.jpg";

function Gallery() {
  return (
    <section id="gallery">
      <div className=" w-[140px] h-[40px] mx-auto my-4 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" text-white text-xl lg:text-3xl font-bold">
          Gallery
        </h2>
      </div>
      
      <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image1} alt="alt" />
        </div>
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image2} alt="alt" />
        </div>
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image3} alt="alt" />
        </div>
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image4} alt="alt" />
        </div>
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image5} alt="alt" />
        </div>
        <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer ">
          <img src={image6} alt="alt" />
        </div>
      </div>
    </section>
  )
}

export default Gallery