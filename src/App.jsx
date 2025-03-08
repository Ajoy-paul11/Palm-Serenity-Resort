import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Overview from './components/Overview'
import Gallery from './components/Gallery'
import MasterPlan from './components/MasterPlan'
import Amenities from './components/Amenities'
import { ToastContainer } from 'react-toastify'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LeadForm from './components/LeadForm'
import { RxCross2 } from 'react-icons/rx'
import Connectivity from './components/Connectivity'
import ScrollToTop from './components/ScrollToTop'
import bodyBg from '../src/assets/palm-body-bg.jpg'
import ProjectConfiguration from './components/ProjectConfiguration'


function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${bodyBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' , backgroundAttachment: 'fixed', height: '100%'}}>
      <ToastContainer />
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <Overview />
      <ProjectConfiguration />
      <Gallery />
      <MasterPlan />
      <Amenities />
      <Connectivity />
      <Contact />
      <Footer />
    </div>
  )
}


function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl lg:w-[500px]">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer cta-bg-color  hover:bg-gray-300 rounded-full">
            <RxCross2
              className=" text-white h-5 w-5 hover:text-black duration-200"
              onClick={() => setOpen(false)}
            />
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}

export default App
