import React, { useState } from "react";
import { Link } from "react-router";
import Footer from "./Footer";
import Logo from "../assets/palm-serenity-logo.png";
import ScrollToTop from "./ScrollToTop";
import { RxCross2 } from "react-icons/rx";
import LeadForm from "./LeadForm";

function Cookies() {
  const buttonText = "ENQUIRE NOW";
  const [isOpen, setIsOpen] = useState(false);

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
            <h1 className="text-4xl font-semibold text-center mb-6">Cookies</h1>
            <p className=" text-xl my-4 px-4 lg:px-20">
              A biscuit constitutes a segment of software script that an
              internet portal forwards to your browser upon accessing data at
              that portal. A biscuit resides as a mere text dossier on your
              computing apparatus or portable gadget by the server of a website,
              and only that server will have the capability to procure or peruse
              the substance of that biscuit. Biscuits facilitate your transition
              amid pages with efficiency as they archive your inclinations and
              commonly heighten your encounter of a portal.
              palmserenityresortplots.com employs the ensuing varieties of
              biscuits to enrich your involvement and interactivity:
            </p>
            <p className="text-xl my-10 px-4 lg:px-20">
              Statistical biscuits for remembering your computing apparatus or
              portable gadget anonymously when you frequent our portal to
              monitor browsing behaviors. Utility biscuits to assist us in
              rendering our portal functional adeptly, recollecting your sign-in
              and sign-up particulars, configuration preferences, and tracking
              the pages you inspect. Impermanent biscuits alias per-session
              biscuits. Per-session biscuits fulfill technical objectives by
              furnishing seamless navigation. These biscuits refrain from
              gathering personal data about users, and they are effaced as
              promptly as you depart from our portal. The biscuits refrain from
              perpetually documenting data, and they are not stashed on your
              computer’s sturdy storage. The biscuits are preserved in memory
              solely during an ongoing browser session. Again, upon shuttering
              your browser, the biscuit vanishes. You might additionally take
              heed that upon visiting palmserenityresortplots.com, you might be
              prompted to consent to biscuits. Opting to disallow biscuits via
              your browser may potentially lead to malfunctioning of
              palmserenityresortplots.com.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Cookies;
