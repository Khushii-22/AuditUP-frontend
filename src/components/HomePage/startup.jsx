import React, { useState, useEffect } from 'react';

export default function StartupLogos() {
  const logos = [
    { name: 'Biosynthesis' },
    { name: 'Nietzsche' },
    { name: 'Hourglass' },
    { name: 'Capsule' },
    { name: 'Command+R' },
    { name: 'Catalog' },
    { name: 'GlobalBank' }
  ];

  const [offset, setOffset] = useState(0);
  const blockWidth = 220; // Width of each block

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 1;
        // Reset when first set of logos has scrolled past
        if (Math.abs(newOffset) >= blockWidth * logos.length) {
          return 0;
        }
        return newOffset;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-screen bg-black flex flex-col justify-center overflow-hidden">
      <div className="w-full mt-8">
        {/* Title */}
        <p className="text-center text-lg font-normal leading-6 text-white/60" style={{ letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>
          Used by startups and small businesses
        </p>

        {/* Container with grid lines */}
        <div className="relative overflow-hidden mt-4 mb-24">
          {/* Top border line */}
          <div className="absolute top-0 left-0 right-0 border-t border-gray-800 z-10" />
          
          {/* Bottom border line */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-800 z-10" />

          {/* Carousel container */}
          <div 
            className="relative flex"
            style={{ 
              transform: `translateX(${offset}px)`,
              width: 'fit-content'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center py-6 min-h-[80px] border-l border-gray-800"
                style={{ width: `${blockWidth}px` }}
              >
                {/* Vertical line on left */}
                
                {/* Content centered in block */}
                <div className="flex flex-row items-center justify-center gap-3">
                  {/* Placeholder icon */}
                  <div className="w-6 h-6 bg-gray-700 rounded-sm flex-shrink-0" />
                  
                  {/* Company name */}
                  <span className="text-gray-600 text-xs font-light tracking-wide whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}