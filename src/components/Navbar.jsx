import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { FaWpforms } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/palm-serenity-logo.png";

function NavItem({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={title.toLowerCase()}
        smooth={true}
        duration={800}
        className="px-4 lg:px-1 xl:px-4 py-2 text-[#2C3E50] font-bold hover:text-[#16A085] flex items-center"
      >
        {title}
      </Link>
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(null);

  const navItems = [
    {
      title: "Overview",
    },
    { title: "Gallery" },
    { title: "Master Plan" },
    {
      title: "Amenities",
    },
    { title: "Connectivity" },
  ];

  return (
    <nav className="bg-color shadow-lg shadow-black/50 relative z-20" id="home" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-8">
        <div className="flex items-center justify-between lg:justify-around xl:justify-between h-16">
          <div className="flex-shrink-0 primary-text-color font-bold pt-8">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[120px] rounded-xl" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.title} title={item.title} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="border-b last:border-0">
                    <Link
                      to={item.title.toLowerCase()}
                      className="block px-3 py-3 font-semibold text-[#2C3E50] hover:bg-gray-100 hover:text-[#16A085]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
