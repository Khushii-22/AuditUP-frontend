import React from "react";

import HomeBackground from "../../assets/home.svg";
import FolderIcon from "../../assets/folder.png";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-gradient-to-r from-slate-900 to-gray-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HomeBackground})` }}
      ></div>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Left Folder Icon */}
      <div className="absolute left-20 top-[15%] z-20 opacity-70">
        <img src={FolderIcon} alt="" className="w-[95px] h-[95px] object-contain" />
      </div>
      
      {/* Right Folder Icon */}
      <div className="absolute right-20 top-[35%] z-20 opacity-70">
        <img src={FolderIcon} alt="" className="w-[95px] h-[95px] object-contain" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white font-space-grotesk font-medium text-[120px] leading-[100%] tracking-[-4%] mb-6 mt-40 bg-auditup-gradient bg-clip-text text-transparent">
            AuditUp
          </h1>
          
          {/* Wrapping paragraph and button in a div and moving them down */}
          <div className="translate-y-2">
            <p className="font-inter font-normal text-[20px] leading-[140%] tracking-[-2%] text-custom-pink max-w-4xl mb-8 mt-10">
              Upload everything, centralize documents, auto-<br />
              extract KPIs, and explain every result.
            </p>
            
            <button className="font-space-grotesk font-medium text-[16px] leading-[100%] tracking-[0%] uppercase text-white bg-[#E62C58] py-5 px-8 shadow-custom-button transition-all duration-300 w-196 h-51 flex items-center justify-center mx-auto rounded-none">
              BOOK FREE DEMO
            </button>
          </div>
          
          {/* Laptop/Screen Block Below Button */}
          <div className="mt-16 relative">
            <div className="w-[956px] h-[400px] bg-gradient-to-b from-[#151515] to-[#151515] rounded-t-2xl border-4 border-gray-700/50 shadow-2xl mx-auto">
              {/* Screen content area - dark empty space */}
              <div className="w-full h-full bg-gradient-to-b from-[#151515] to-[#151515] rounded-t-lg"></div>
            </div>
       
          </div>
        </div>
      </div>
    </section>
  );
}