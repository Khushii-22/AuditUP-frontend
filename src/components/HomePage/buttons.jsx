import React from "react";

export function PrimaryButton({ children, onClick }) {
  return (
   <button
  onClick={onClick}
  className="w-48 h-[51px] px-8 py-5 bg-[#E62C58] text-white font-medium rounded-lg shadow-[0px_21.46px_50.92px_0px_rgba(0,0,0,0.25)] text-center uppercase text-base leading-none tracking-normal whitespace-nowrap flex items-center justify-center"
>
  {children}
</button>
  );
}

export function GhostButton({ children, onClick }) {
  return (
   <button
  onClick={onClick}
  className="w-48 h-[51px] px-8 py-5 bg-white text-[#E62C58] font-medium rounded-lg shadow-[0px_21.46px_50.92px_0px_rgba(0,0,0,0.25)] text-center uppercase text-base leading-none tracking-normal whitespace-nowrap flex items-center justify-center"
>
  {children}
</button>
  );
}

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Main Heading */}
      <h1 className="font-medium text-[44px] leading-[120%] tracking-[-0.04em] text-center text-gray-200 max-w-4xl mb-6">
        Because we care about your <br/> important documents
      </h1>
      
      {/* Subheading */}
      <p className="font-normal text-xl leading-[140%] tracking-[-0.02em] text-center text-white/70 max-w-3xl mb-12">
        Upload everything, centralize documents, auto-<br/>extract KPIs, and explain every result.
      </p>
      
      {/* Buttons Container */}
      <div className="flex flex-row gap-4 items-center">
        <PrimaryButton>BOOK FREE DEMO</PrimaryButton>
        <GhostButton>BOOK FREE DEMO</GhostButton>
      </div>
    </div>
  );
}