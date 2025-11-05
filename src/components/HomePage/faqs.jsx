import React, { useState } from "react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0); // Default open (1st item)

  const items = [
    {
      q: "How does AuditUp ensure the accuracy of extracted data?",
      a: "Traditional tools stop at data extraction. AuditUp goes further—it explains its reasoning, flags risks automatically, enables in-doc collaboration, and exports audit-ready reports that leadership can trust.",
    },
    {
      q: "Can I upload mixed file types in one batch?",
      a: "Yes, AuditUp supports mixed file types in single batches for seamless processing.",
    },
    {
      q: "What makes AuditUp different from other document AI tools?",
      a: "Traditional tools stop at data extraction. AuditUp goes further—it explains its reasoning, flags risks automatically, enables in-doc collaboration, and exports audit-ready reports that leadership can trust.",
    },
    {
      q: "How does the pricing model work for enterprise clients?",
      a: "We offer customized pricing based on your organization's specific needs and volume requirements.",
    },
    {
      q: "Does AuditUp integrate with our existing tools or ERP systems?",
      a: "Yes, AuditUp offers robust API integrations with popular ERP systems and business tools.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-h-screen mx-auto p-[133px] bg-black text-white">
      <div className="mb-12">
        {/* Features heading */}
        <h4 className="text-[#97A1AE] text-lg mb-3 font-inter font-light leading-6 tracking-[-0.02em]">
          Features
        </h4>

        {/* Main heading */}
        <h2 className="text-5xl font-space-grotesk font-normal leading-[120%] tracking-[-0.04em] text-[#E5E7EB]">
          For teams who demand
          <br />
          accuracy, not assumptions.
        </h2>
      </div>

      <div className="border border-gray-800 rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`cursor-pointer transition-colors duration-300 ${
              openIndex === index ? "bg-[#2C2D30]" : "hover:bg-black"
            }`}
          >
            <div className="flex justify-between items-center px-6 py-5">
              {/* Question text - changes weight and color when open */}
              <p
                className={`text-xl font-inter leading-[100%] tracking-normal ${
                  openIndex === index
                    ? "font-semibold text-[#E5E7EB]"
                    : "font-normal text-[#97A1AE]"
                }`}
              >
                {item.q}
              </p>
              <span className="text-2xl text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="px-6 pb-6">
                {/* Answer text */}
                <p className="text-[#D0D5DB] text-base font-inter font-normal leading-6 tracking-normal">
                  {item.a}
                </p>
              </div>
            )}

            {index !== items.length - 1 && (
              <div className="border-t border-gray-800"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
