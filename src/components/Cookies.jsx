import React from 'react'
import { Link } from 'react-router'
import Footer from "./Footer";
import Logo from "../assets/palm-serenity-logo.png";
import ScrollToTop from './ScrollToTop';


function Cookies() {
  return (
    <section>
        <ScrollToTop />
        <nav className="bg-color shadow-lg shadow-black/50 relative z-20" id="home" >
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
          A biscuit constitutes a segment of software script that an internet portal forwards to your browser upon accessing data at that portal. A biscuit resides as a mere text dossier on your computing apparatus or portable gadget by the server of a website, and only that server will have the capability to procure or peruse the substance of that biscuit. Biscuits facilitate your transition amid pages with efficiency as they archive your inclinations and commonly heighten your encounter of a portal. palmserenityresortplots.com employs the ensuing varieties of biscuits to enrich your involvement and interactivity:
          </p>
          <p className='text-xl my-10 px-4 lg:px-20'>
          Statistical biscuits for remembering your computing apparatus or portable gadget anonymously when you frequent our portal to monitor browsing behaviors. Utility biscuits to assist us in rendering our portal functional adeptly, recollecting your sign-in and sign-up particulars, configuration preferences, and tracking the pages you inspect. Impermanent biscuits alias per-session biscuits. Per-session biscuits fulfill technical objectives by furnishing seamless navigation. These biscuits refrain from gathering personal data about users, and they are effaced as promptly as you depart from our portal. The biscuits refrain from perpetually documenting data, and they are not stashed on your computer’s sturdy storage. The biscuits are preserved in memory solely during an ongoing browser session. Again, upon shuttering your browser, the biscuit vanishes. You might additionally take heed that upon visiting palmserenityresortplots.com, you might be prompted to consent to biscuits. Opting to disallow biscuits via your browser may potentially lead to malfunctioning of palmserenityresortplots.com.
          </p>
        </div>
        
      </div>
      <Footer />
    </section>
  )
}

export default Cookies