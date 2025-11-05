import React, { useEffect, useRef, useState } from "react";
import heartIcon from "../../assets/heart.png";
import puzzleIcon from "../../assets/puzzle.png";
import snailIcon from "../../assets/snail.png";
import questionIcon from "../../assets/question.png";

export default function SecurityLayers() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // randomized per-block timing (set once when component becomes visible)
  const [blockTimings, setBlockTimings] = useState([]);

  useEffect(() => {
    if (!visible) return;
    // Create 8 blocks with random timing but ensuring continuous coverage with max 2 at once
    const configs = Array.from({ length: 8 }).map((_, i) => {
      // Random delays between 2-5 seconds for faster appearance
      const baseDelay = i * (2 + Math.random() * 3); // 2-5 seconds between blocks
      const delay = baseDelay;
      
      // Random durations between 16-22 seconds for faster movement
      const duration = 16 + Math.random() * 6; // 16-22 seconds
      
      const wiggle = 4 + Math.random() * 10; // 4-14px vertical wiggle
      const wiggleDuration = 3 + Math.random() * 5; // 3-8s
      const phase = 0;
      return { delay, duration, wiggle, wiggleDuration, phase };
    });
    setBlockTimings(configs);
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Starfield background */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[15%] opacity-60"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[5%] right-[20%] opacity-40"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[15%] right-[10%] opacity-70"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[25%] opacity-50"></div>
      </div>

      {/* Keyframe animations - use GPU-accelerated transforms and opacity toggles */}
      <style>{`
        /* slide from off-screen left to off-screen right.
           At center (roughly 45-60%) we fade the block out to simulate passing through the beam,
           then fade back in on the after-side with a red glow. Using translateX avoids layout
           thrashing and keeps motion smooth (GPU accelerated). */
        @keyframes slideX {
          0% {
            transform: translateX(-120vw);
            opacity: 1;
            filter: drop-shadow(0 0 0 rgba(0,0,0,0));
          }
          /* approach beam: still visible */
          40% { opacity: 1; }
          /* entering beam area: fade immediately to fully invisible and remove glow */
          47% { opacity: 0; filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
          /* fully inside beam: remain invisible */
          63% { opacity: 0; filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
          /* exited beam: fade back in with red glow */
          70% {
            opacity: 1;
            filter: drop-shadow(0 0 18px rgba(230,44,88,0.95));
          }
          100% {
            transform: translateX(120vw);
            opacity: 1;
            filter: drop-shadow(0 0 18px rgba(230,44,88,0.95));
          }
        }

        /* subtle vertical motion applied to inner wrapper so X and Y transforms compose */
        @keyframes wiggleY {
          0% { transform: translateY(0); }
          25% { transform: translateY(calc(var(--wiggle) * -1)); }
          50% { transform: translateY(0); }
          75% { transform: translateY(var(--wiggle)); }
          100% { transform: translateY(0); }
        }

        .animated-block {
          position: absolute;
          left: 0; /* start at left of container; translateX will move it off-screen */
          will-change: transform, opacity;
          /* Start with blocks visible and let animation-delay control timing */
          opacity: 1;
        }
        .block-inner {
          will-change: transform;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 mb-40">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-400 mb-4">
            Security Layers
          </p>
          <h1 className="font-space-grotesk font-medium text-[44px] leading-[120%] tracking-[-0.04em] text-gray-200">
            Because we care about your
            <br />
            important documents
          </h1>
        </div>

        {/* Before/After Section */}
        <div className="max-w-6xl mx-auto relative overflow-visible">
          <div className="grid grid-cols-2 gap-0 relative overflow-visible">
            {/* Before Auditup */}
            <div className="relative bg-black">
              <div className="absolute top-0 left-0 right-0 h-11 px-2.5 py-2.5 bg-[#E62C5826]">
                <p className="text-xs tracking-widest text-white text-center">
                  BEFORE AUDITUP
                </p>
              </div>

              <div className="h-96 bg-gradient-to-br from-red-950/10 via-black to-black relative pt-16 px-8"></div>
            </div>

            {/* Animated blocks - random timing with faster appearance */}
            {(() => {
              const items = [
                { icon: heartIcon, label: "Human bias", width: 148 },
                { icon: puzzleIcon, label: "Missed mismatches", width: 208 },
                { icon: snailIcon, label: "Slow reviews", width: 157 },
                { icon: questionIcon, label: "Lost versions", width: 159 },
                { icon: heartIcon, label: "Human bias", width: 148 },
                { icon: puzzleIcon, label: "Missed mismatches", width: 208 },
                { icon: snailIcon, label: "Slow reviews", width: 157 },
                { icon: questionIcon, label: "Lost versions", width: 159 },
              ];
              const num = blockTimings.length || 8;
              const start = 10;
              const end = 90;
              return blockTimings.map((cfg, i) => {
                const item = items[i % items.length];
                const step = (end - start) / Math.max(1, num - 1);
                const topPct = start + i * step;
                return (
                  <div
                    key={i}
                    className={`animated-block z-30`}
                    style={{
                      top: `calc(44px + ${topPct}%)`,
                      animationName: "slideX",
                      animationDuration: `${cfg.duration}s`,
                      animationDelay: `${cfg.delay}s`,
                      animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      animationIterationCount: "infinite",
                      animationFillMode: "both",
                    }}
                  >
                    <div
                      className="block-inner h-11 flex items-center gap-2.5 px-3.5 py-3 rounded-[10px] border"
                      style={{
                        width: `${item.width}px`,
                        background: "#FFFFFF0A",
                        borderWidth: "1px",
                        borderImageSource:
                          "linear-gradient(180deg, #4C4C4C 0%, rgba(76, 76, 76, 0.1) 100%)",
                        borderImageSlice: 1,
                        ["--wiggle"]: `${cfg.wiggle}px`,
                        animation: `wiggleY ${cfg.wiggleDuration}s ease-in-out infinite`,
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-5 h-5 opacity-100"
                      />
                      <span className="text-white text-base font-normal leading-[100%]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              });
            })()}

            {/* Before Auditup - closing tag moved */}
            <div className="hidden"></div>

            {/* Vertical divider with glow - Red glowing beam */}
            <div className="absolute left-1/2 top-[-10.84px] transform -translate-x-1/2 z-20 w-[460px] h-[557px] pointer-events-none">
              {/* Red glow using filter blur */}
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[60px] h-full"
                style={{
                  background: "#FF0000",
                  filter: "blur(115px)",
                  opacity: 0.8,
                }}
              ></div>
              {/* Core gradient line */}
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[6.5px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(217, 217, 217, 0) 3.37%, #D9D9D9 36.54%, #D9D9D9 69.23%, rgba(217, 217, 217, 0) 95.67%)",
                  opacity: 1,
                }}
              ></div>
            </div>

            {/* After Auditup */}
            <div className="relative bg-black overflow-visible">
              <div className="absolute top-0 left-0 right-0 h-11 px-2.5 py-2.5 bg-[#E62C5826] text-center">
                <p className="text-xs tracking-widest text-white text-center">
                  AFTER AUDITUP
                </p>
              </div>

              <div className="h-96 bg-gradient-to-bl from-blue-950/10 via-black to-black relative pt-16 overflow-visible"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}