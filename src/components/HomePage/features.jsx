import React from "react";
import { ArrowRight } from "lucide-react";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";

export default function FeatureSection() {
  const features = [
    {
      image: frame1,
    },
    {
      image: frame2,
    },
    {
      image: frame3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Space+Grotesk:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-base leading-6 tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              color: "#97A1AE",
              letterSpacing: "-0.02em",
            }}
          >
            Features
          </p>
          <h1
            className="text-5xl leading-tight tracking-tight mt-3"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "44px",
              lineHeight: "120%",
              letterSpacing: "-0.04em",
              color: "#E5E7EB",
            }}
          >
            For teams who demand
            <br />
            accuracy, not assumptions.
          </h1>
        </div>

        {/* Feature Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap w-[1200px] h-[72px] opacity-100 border border-white/20 p-2 rounded-md">
          <button
            className="px-6 py-3 bg-black text-center flex-1"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Explainable Extraction
          </button>
          <button
            className="px-6 py-3 bg-black text-center flex-1"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Explainable Extraction
          </button>
          <button
            className="px-6 py-3 bg-black text-center flex-1"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Explainable Extraction
          </button>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 rounded-lg p-8 bg-[#000000] w-[1200px] h-[412px] opacity-100 border border-white/20"
            >
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "28px",
                    lineHeight: "120%",
                    letterSpacing: "-0.04em",
                    color: "#E5E7EB",
                  }}
                >
                  See the number—and its source.
                </h2>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    color: "#97A1AE",
                  }}
                >
                  Every field AuditUp AI pulls (totals, dates, names, clauses)
                  is linked to the original line in the document with a
                  confidence badge and citation. Trust it or fix it in one
                  click.
                </p>
               <button
  className="flex items-center gap-2 bg-[#1B2937] hover:bg-slate-700 w-[141px] h-[42px] opacity-100 pt-3 pr-4 pb-3 pl-4 rounded-md transition-colors justify-center whitespace-nowrap"
  style={{
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#F3F4F6"
  }}
>
  LEARN MORE
  <ArrowRight className="w-4 h-4" />
</button>

              </div>

              {/* Right Visual */}
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-2xl blur-2xl opacity-60`}
                ></div>
                <div
                  className={`relative rounded-2xl min-h-[300px] flex items-center justify-center`}
                >
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-[547px] h-[412px] top-[-32px] left-[41px] opacity-100 rotate-0 absolute"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
