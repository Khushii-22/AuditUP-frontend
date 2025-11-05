"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SecurityLayers() {
  const [scrollStage, setScrollStage] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (Math.abs(scrollDelta) > 50) {
        if (scrollDelta > 0 && scrollStage < 4) {
          setScrollStage(prev => prev + 1);
        } else if (scrollDelta < 0 && scrollStage > 0) {
          setScrollStage(prev => prev - 1);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollStage, lastScrollY]);

  const getPlatePosition = (plate) => {
    // Stage 0-2: Initial positions with rightward offset
    if (scrollStage < 3) {
      const positions = {
        left: { x: 200, y: 0 },
        top: { x: 200, y: 0 },
        bottom: { x: 200, y: 0 },
        right: { x: 200, y: 0 }
      };
      return positions[plate];
    }
    // Stage 3+: All plates align horizontally in same row (after scroll)
    const positions = {
      left: { x: -180, y: -40 },
      top: { x: 50, y: 0 },
      bottom: { x: 340, y: -80 },
      right: { x: 580, y: -40 }
    };
    return positions[plate];
  };

  const features = [
    "End-to-end Encryption",
    "Access Control",
    "Audit Logs",
    "Data Backup"
  ];

  return (
    <div className="min-h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">
        <div className="text-center w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4">
              Security Layers
            </p>
            <h1 className="font-medium text-[44px] leading-[120%] tracking-[-0.04em] text-gray-200">
              Because we care about your
              <br />
              important documents
            </h1>
          </div>

          {/* Isometric box illustration */}
          <div className="flex justify-center relative">
            <svg
              width="1200"
              height="500"
              viewBox="300 0 800 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
            >
              {/* Left plate */}
              <motion.g
                animate={getPlatePosition("left")}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <path
                  d="M460 120 L520 160 L460 200 L400 160 Z"
                  fill="url(#leftGradient)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrollStage >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <line
                    x1="460"
                    y1="200"
                    x2="460"
                    y2="280"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <foreignObject x="360" y="290" width="200" height="60">
                    <div className="text-white text-sm border border-gray-600 px-4 py-2 rounded bg-black/50">
                      {features[0]}
                    </div>
                  </foreignObject>
                </motion.g>
              </motion.g>

              {/* Top plate */}
              <motion.g
                animate={getPlatePosition("top")}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <path
                  d="M520 80 L580 120 L520 160 L460 120 Z"
                  fill="url(#topGradient)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrollStage >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <line
                    x1="520"
                    y1="160"
                    x2="520"
                    y2="240"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <foreignObject x="420" y="250" width="200" height="60">
                    <div className="text-white text-sm border border-gray-600 px-4 py-2 rounded bg-black/50">
                      {features[1]}
                    </div>
                  </foreignObject>
                </motion.g>
              </motion.g>

              {/* Bottom plate */}
              <motion.g
                animate={getPlatePosition("bottom")}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <path
                  d="M520 160 L580 200 L520 240 L460 200 Z"
                  fill="url(#bottomGradient)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrollStage >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <line
                    x1="520"
                    y1="240"
                    x2="520"
                    y2="320"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <foreignObject x="420" y="330" width="200" height="60">
                    <div className="text-white text-sm border border-gray-600 px-4 py-2 rounded bg-black/50">
                      {features[2]}
                    </div>
                  </foreignObject>
                </motion.g>
              </motion.g>

              {/* Right plate */}
              <motion.g
                animate={getPlatePosition("right")}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <path
                  d="M580 120 L640 160 L580 200 L520 160 Z"
                  fill="url(#rightGradient)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrollStage >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <line
                    x1="580"
                    y1="200"
                    x2="580"
                    y2="280"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <foreignObject x="480" y="290" width="200" height="60">
                    <div className="text-white text-sm border border-gray-600 px-4 py-2 rounded bg-black/50">
                      {features[3]}
                    </div>
                  </foreignObject>
                </motion.g>
              </motion.g>

              {/* Gradient definitions */}
              <defs>
                <linearGradient
                  id="topGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>

                <linearGradient
                  id="rightGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d1d5db" />
                  <stop offset="100%" stopColor="#8b92a0" />
                </linearGradient>

                <linearGradient
                  id="bottomGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#b8bec7" />
                  <stop offset="100%" stopColor="#7d8593" />
                </linearGradient>

                <linearGradient
                  id="leftGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
              </defs>

              {/* Vertical lines - pillars */}
              <motion.g
                stroke="#e5e7eb"
                strokeWidth="1.5"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: scrollStage < 2 ? 0.3 : 0,
                  x: 200
                }}
                transition={{ duration: 0.7 }}
              >
                <line x1="460" y1="120" x2="460" y2="300" />
                <line x1="520" y1="160" x2="520" y2="340" />
                <line x1="580" y1="120" x2="580" y2="300" />
                <line x1="400" y1="160" x2="400" y2="340" />
                <line x1="640" y1="160" x2="640" y2="340" />
              </motion.g>
            </svg>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 text-gray-500 text-sm">
            Scroll Stage: {scrollStage} / 4
          </div>
        </div>
      </div>
    </div>
  );
}