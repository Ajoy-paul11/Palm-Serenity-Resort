import React from "react";
import submit from "../assets/form-submit.gif";
import { Link } from "react-router";
import Footer from "./Footer";
import Logo from "../assets/palm-serenity-logo.png";
import { FaChevronLeft } from "react-icons/fa";


function Thankyou() {
  return (
    <>
      <nav
        className="bg-color shadow-lg shadow-black/50 relative z-20"
        id="home"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-8">
          <div className="flex items-center justify-between  xl:justify-between h-16">
            <div className="flex-shrink-0 primary-text-color font-bold pt-8">
              <Link to="/">
                <img src={Logo} alt="logo" className="w-[120px] rounded-xl" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className=" container mx-auto w-full h-full flex flex-col gap-6 lg:gap-10 p-4 py-16 lg:py-0 lg:p-16">
        <div className=" text-lg lg:text-2xl px-2 lg:px-24 py-4 lg:py-10 ">
        <div className=" text-blue-500 hover:text-purple-600 inline-flex items-center gap-2">
        <span ><FaChevronLeft /></span>
        <Link to="/" >Back</Link>
        </div>
        </div>
        <img src={submit} alt="form-submit" className=" w-[50%] md:w-[30%] lg:w-[20%] mx-auto"/>
        <div className=" px-4 lg:px-12">
          <h2 className=" text-center text-2xl lg:text-4xl primary-text-color font-semibold font-serif">
            Thank you for your interest in our project. Our team shall contact
            you very soon
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Thankyou;
