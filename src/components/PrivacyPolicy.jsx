import React from "react";
import Footer from "./Footer";
import Logo from "../assets/palm-serenity-logo.png";
import { Link } from "react-router";
import ScrollToTop from "./ScrollToTop";

function PrivacyPolicy() {
  const info = [
    {
      title: "Privacy Policy Amendments",
      desc: "This confidentiality provision remains subject to alterations and evaluations at any given time, without prior notice or consent. Thus, we urge you to revisit the platform periodically and meticulously peruse the terms and conditions of this confidentiality provision to remain apprised of any modifications that transpire.",
    },
    {
      title: "User Data Compilation",
      desc: "Upon accessing our platform, you acknowledge our terms and grant us authorization to compile and utilize any data you voluntarily furnish. While certain visits may not necessitate personal data, others might require it to facilitate access to specific links or webpages. The data you provide enables us to disseminate information and updates, acknowledge receipt of your correspondence, and furnish relevant goods and services. We abstain from disclosing personal data to external entities, and you retain the option to opt out of our email registry.",
    },
    {
      title: "Data Protection",
      desc: "During data transmission between the user and server, sensitive information undergoes encryption. We impose restrictions on employee access to your personal data and uphold stringent confidentiality standards. Cookies may be employed for security, session continuity, and customization purposes. Disabling cookies could potentially restrict access to certain services or functionalities. For inquiries or recommendations concerning this confidentiality provision or your interactions with this platform, kindly reach out to us. This webpage does not serve as the official platform; its sole purpose lies in providing informational content.",
    },
  ];
  return (
    <section>
        <ScrollToTop />
        <nav className="bg-color shadow-lg shadow-black/50 relative z-20" id="home" >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-8">
                <div className="flex items-center justify-between lg:justify-around xl:justify-between h-16">
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
          <h1 className="text-4xl font-semibold text-center mb-6">Privacy Policy</h1>
          <p className=" text-xl">
            This webpage does not serve as the official platform; its sole
            purpose lies in providing informational content. In our steadfast
            dedication to safeguarding your individual data, we have crafted
            this extensive confidentiality provision to uphold your interests
            and preserve data integrity on our platform.
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
  );
}

export default PrivacyPolicy;
