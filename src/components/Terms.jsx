import React, { useState } from "react";
import Footer from "./Footer";
import Logo from "../assets/palm-serenity-logo.png";
import { Link } from "react-router";
import ScrollToTop from "./ScrollToTop";
import { RxCross2 } from "react-icons/rx";
import LeadForm from "./LeadForm";

function Terms() {
  const buttonText = "ENQUIRE NOW";
  const [isOpen, setIsOpen] = useState(false);

  const info = [
    {
      title: "Intellectual Possessions",
      desc: "All contents, visuals, emblems, and alternative substances on this homepage are the possession of the corresponding project creator or its licensees. These assets are defended by intellectual possession statutes, and users are explicitly forbidden from replicating, altering, dispersing, or utilizing any content without receiving prior written authorization.",
    },
    {
      title: "Property Data",
      desc: "The content of this homepage, incorporating particulars of the properties, expenses, and accessibility, is subject to alteration at any moment. The Corporation disclaims accountability for any inaccuracies or exclusions in the provided data.",
    },
    {
      title: "User Responsibilities",
      desc: "Users are obliged to provide accurate and up-to-date data when submitting inquiries or appeals via the homepage. Additionally, users must pledge to abstain from partaking in any illegal or detrimental actions, such as hacking, spamming, or transmitting malevolent software.",
    },
    {
      title: "Privacy and Data Compilation",
      desc: "The Corporation may gather, stock, and employ your personal information in accordance with its confidentiality policy. We may employ third-party amenities or tracking technologies, such as cookies or analytics instruments, to compile data regarding your use of this homepage.",
    },
    {
      title: "Non-liability Disclaimer",
      desc: "The Corporation categorically disavows accountability for any harms, losses, or wounds arising from the utilization of the homepage or reliance on the provided data. This disclaimer extends to encompass, but is not confined to, financial losses, property impairment, or any other direct or indirect harms.",
    },
    {
      title: "Links to Third-Party Websites",
      desc: "This homepage may comprise connections to exterior websites or reserves. We do not sanction or presume responsibility for the content, confidentiality methods, or accessibility of those third-party sites.",
    },
    {
      title: "Alterations to the Stipulations",
      desc: "The Corporation may amend or revise these terms and conditions at any time without prior notification. We prompt you to periodically peruse these terms to remain informed about any alterations.",
    },
    {
      title: "Alterations to the Stipulations",
      desc: "Any legal disputes emanating from your use of this homepage will be regulated by the decrees of the State of Karnataka and will be adjudicated in the tribunals of Bengaluru.",
    },
  ];
  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
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
      )}
      <section>
        <ScrollToTop />
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
        <nav
          className="bg-color shadow-lg shadow-black/50 relative z-20"
          id="home"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-8">
            <div className="flex items-center justify-between xl:justify-between h-16">
              <div className="flex-shrink-0 primary-text-color font-bold pt-8">
                <Link to="/">
                  <img src={Logo} alt="logo" className="w-[120px] rounded-xl" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-8 py-12 primary-text-color">
          <div className="my-4">
            <h1 className="text-4xl font-semibold text-center mb-6">
              Terms and Conditions
            </h1>
            <p className=" text-xl">
              Kindly be informed that entry into or utilization of the homepage
              suggests the user's acceptance to adhere to the subsequent terms
              and conditions:
            </p>
          </div>
          <div className="my-8 flex flex-col gap-6 px-4 lg:px-16">
            {info.map((item, index) => (
              <div key={index} className="my-4">
                <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
                <p className=" text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Terms;
