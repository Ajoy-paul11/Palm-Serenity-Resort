import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router';

function Footer() {
    return (
        <footer className="bg-[#2C3E50] text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h4 className="text-xl font-bold mb-4">LuxuryEstates</h4>
                <p className="text-white/80 mb-6">
                  Providing exceptional real estate opportunities in the most desirable locations worldwide.
                </p>
              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <FooterLink href="#home">Home</FooterLink>
                  <FooterLink href="#overview">About Us</FooterLink>
                  <FooterLink href="#gallery">Properties</FooterLink>
                  <FooterLink href="#amenities">Amenities</FooterLink>
                  <FooterLink href="#contact">Contact</FooterLink>
                </ul>
              </div>
    
              {/* Legal */}
              <div>
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms-conditions">Terms & Conditions</FooterLink>
                  <FooterLink href="/disclaimer">Disclaimer</FooterLink>
                  <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
                </ul>
              </div>
    
              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <address className="not-italic">
                  <div className="flex items-center space-x-3 mb-3">
                    <FiPhone className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-white/80">9606342643</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdOutlineEmail className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-white/80">palmserenityresortsplot@gmail.com</span>
                  </div>
                </address>
              </div>
            </div>
    
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white text-sm">&copy; {new Date().getFullYear()} Pulm Serenity. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}
  
  function FooterLink({ href, children }) {
    return (
      <li>
        <Link to={href} className="text-[#16A085] hover:text-white transition-colors">
          {children}
        </Link>
      </li>
    )
  }
  

export default Footer