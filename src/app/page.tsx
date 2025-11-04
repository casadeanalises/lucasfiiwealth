"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      {/* <Stats />  TODO! */}
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}