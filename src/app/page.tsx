import React from "react";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing-sections";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Team from "@/components/team-section";
import Navbar from "@/components/navbar";

function IndexPage() {
  return (
    <div>
      <div className="flex flex-col items-center text-center space-y-2 mx-2">
        <Hero />
      </div>
      <Navbar />
      <Pricing />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
}

export default IndexPage;
