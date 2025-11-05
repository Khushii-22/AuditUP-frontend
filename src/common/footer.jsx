import React from "react";
// Import social media icons
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            HOME
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            FEATURES
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            USECASES
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            PRICING
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            FAQ
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            PRIVACY POLICY
          </a>
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
            TERMS
          </a>
        </div>

        {/* Second Row - Description with Border and Social Icons */}
        <div className="border-t border-b border-gray-600 py-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* First Column - Description Text (Left Aligned) */}
            <div className="flex-1 max-w-2xl border-r border-gray-600 pr-6">
              <p className="text-gray-300 text-sm leading-relaxed text-left">
                Traditional tools stop at data extraction. AuditUp goes further—it explains its reasoning, 
                flags risks automatically, enables in-doc collaboration, and exports audit-ready reports 
                that leadership can trust.
              </p>
            </div>

            {/* Social Media Icons - Second, Third, Fourth, Fifth Columns */}
            <div className="flex gap-6">
              {/* WhatsApp */}
              <div className="flex items-center">
                <a href="#" className="hover:opacity-80 transition-opacity px-3 border-r border-gray-600">
                  <img 
                    src={whatsapp} 
                    alt="WhatsApp" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center">
                <a href="#" className="hover:opacity-80 transition-opacity px-3 border-r border-gray-600">
                  <img 
                    src={linkedin} 
                    alt="LinkedIn" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              
              {/* YouTube */}
              <div className="flex items-center">
                <a href="#" className="hover:opacity-80 transition-opacity px-3 border-r border-gray-600">
                  <img 
                    src={youtube} 
                    alt="YouTube" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              
              {/* Instagram */}
              <div className="flex items-center">
                <a href="#" className="hover:opacity-80 transition-opacity px-3">
                  <img 
                    src={insta} 
                    alt="Instagram" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row - Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © CacheLabs 2025
          </p>
        </div>
      </div>
    </footer>
  );
}