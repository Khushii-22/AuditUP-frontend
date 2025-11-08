import React from "react";
// Import social media icons
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import blur from "../assets/blur.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-black text-white py-8 relative"
      style={{
        backgroundImage: `url(${blur})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "70%",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Navigation Links */}
        <div className="flex flex-wrap justify-start items-center gap-8 mb-6">
          <a href="#" className="text-sm text-white transition-colors">
            HOME
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            FEATURES
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            USECASES
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            PRICING
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            FAQ
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            PRIVACY POLICY
          </a>
          <a href="#" className="text-sm text-white transition-colors">
            TERMS
          </a>
        </div>

        {/* Second Row - Description with Border and Social Icons */}
        <div className="border-t border-b border-[#FFEFE73D] mb-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
            {/* First Column - Description Text (Left Aligned) */}
            <div className="flex-1 max-w-2xl py-6">
              <p className="text-gray-300 text-sm leading-relaxed text-left">
                Traditional tools stop at data extraction. AuditUp goes
                further—it explains <br /> its reasoning, flags risks
                automatically, enables in-doc collaboration, and <br /> exports
                audit-ready reports that leadership can trust.
              </p>
            </div>

            {/* Social Media Icons - Table Structure */}
            <div className="flex border-l border-[#FFEFE73D]">
              {/* WhatsApp */}
              <div className="flex items-center justify-center border-r border-[#FFEFE73D] w-24">
                <a href="#" className="transition-opacity">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center border-r border-[#FFEFE73D] w-24">
                <a href="#" className="transition-opacity">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>

              {/* YouTube */}
              <div className="flex items-center justify-center border-r border-[#FFEFE73D] w-24">
                <a href="#" className="transition-opacity">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-center w-24">
                <a href="#" className="transition-opacity">
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
          <p className="text-white text-sm">Copyright © CacheLabs 2025</p>
        </div>
      </div>
    </footer>
  );
}
