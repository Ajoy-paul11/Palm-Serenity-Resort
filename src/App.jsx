import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router'
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


function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <Navbar />
      <HeroSection />
      <Overview />
      <Gallery />
      <MasterPlan />
      <Amenities />
      <Contact />
      <Footer />
      </BrowserRouter>
    </>
  )
}


function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl bg-slate-500">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full">
            <RxCross2
              className=" text-white h-6 w-6 hover:text-black duration-200"
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
