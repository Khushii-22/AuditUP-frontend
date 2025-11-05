import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path based on your folder structure

export default function Testimonials() {
  const testimonials = [
    {
      name: "Krishna Gupta",
      title: "Product Manager, Cache Labs",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5
    },
    {
      name: "Krishna Gupta",
      title: "Product Manager, Cache Labs",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5
    },
    {
      name: "Krishna Gupta",
      title: "Product Manager, Cache Labs",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4">
          Testimonials
        </p>
        <h1 className="font-space-grotesk font-medium text-[44px] leading-[120%] tracking-[-0.04em] text-gray-200">
          Because we care about your<br />important documents
        </h1>
      </div>

      {/* Grid Layout - Fixed 410px squares */}
      <div className="max-w-[1230px] mx-auto">
        <div className="grid grid-cols-3 grid-rows-2 gap-px bg-gray-800">
          {/* Top Left - Logo */}
          <div className="bg-black flex items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <img 
              src={logo} 
              alt="Spherule Logo" 
              className="w-[216px] h-[63px] opacity-100"
            />
          </div>

          {/* Top Middle - First Testimonial */}
          <div className="bg-black flex flex-col items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <div className="max-w-xs text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Spherule Logo" 
                  className="w-[109px] h-[32px] opacity-100"
                />
              </div>
              
              <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4 text-center">
                {testimonials[0].quote}
              </p>
              <br/>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <br/>
              <p className="text-gray-300 font-medium mb-1 text-[16px] leading-[24px] tracking-[-0.02em] text-center">
                {testimonials[0].name}
              </p>
              <p className="text-gray-400 font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-center">
                {testimonials[0].title}
              </p>
            </div>
          </div>

          {/* Top Right - Logo */}
          <div className="bg-black flex items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <img 
              src={logo} 
              alt="Spherule Logo" 
              className="w-[216px] h-[63px] opacity-100"
            />
          </div>

          {/* Bottom Left - Second Testimonial */}
          <div className="bg-black flex flex-col items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <div className="max-w-xs text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Spherule Logo" 
                  className="w-[109px] h-[32px] opacity-100"
                />
              </div>
              
              <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4 text-center">
                {testimonials[1].quote}
              </p>
              <br/>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <br/>
              <p className="text-gray-300 font-medium mb-1 text-[16px] leading-[24px] tracking-[-0.02em] text-center">
                {testimonials[1].name}
              </p>
              <p className="text-gray-400 font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-center">
                {testimonials[1].title}
              </p>
            </div>
          </div>

          {/* Bottom Middle - Logo */}
          <div className="bg-black flex items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <img 
              src={logo} 
              alt="Spherule Logo" 
              className="w-[216px] h-[63px] opacity-100"
            />
          </div>

          {/* Bottom Right - Third Testimonial */}
          <div className="bg-black flex flex-col items-center justify-center p-8 border border-gray-800 w-[410px] h-[410px]">
            <div className="max-w-xs text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Spherule Logo" 
                  className="w-[109px] h-[32px] opacity-100"
                />
              </div>
              
              <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4 text-center">
                {testimonials[2].quote}
              </p>
              <br/>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonials[2].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <br/>
              <p className="text-gray-300 font-medium mb-1 text-[16px] leading-[24px] tracking-[-0.02em] text-center">
                {testimonials[2].name}
              </p>
              <p className="text-gray-400 font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-center">
                {testimonials[2].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}