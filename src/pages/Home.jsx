import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import HomeHero from "../components/HomePage/homeHero";
import Startup from "../components/HomePage/startup";
import SecurityLayers from "../components/HomePage/securityLayers";
import Features from "../components/HomePage/features";
import Documents from "../components/HomePage/documents";
import Testimonials from "../components/HomePage/testimonials";
import Faqs from "../components/HomePage/faqs";
import Buttons from "../components/HomePage/buttons";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <HomeHero />

        {/* Content Sections */}
        <div className="w-full">
          <section className="w-full">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0">
              <Startup />
            </div>
          </section>
           

       <section className="px-6 sm:px-10 md:px-14 lg:px-14 xl:px-28 2xl:px-60 py-10 bg-black">
  <div className="container mx-auto">
    <SecurityLayers />
  </div>
</section>


          <section className="w-full">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0">
              <Features />
            </div>
          </section>

         <section className="w-full">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0">
              <Documents />
            </div>
          </section>

          <section className="w-full">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0">
              <Testimonials />
            </div>
          </section>

          <section className="w-full">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-0">
              <Faqs />
              <div className="text-center">
                <Buttons />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
