import React from "react";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing-sections";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Team from "@/components/team-section";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contact-form";

function IndexPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactForm />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
}

export default IndexPage;
export const metadata = {
  title: "Port-Pressure",
  description: "Welcome to our site — here's what we do.",
  keywords: ["nextjs", "seo", "website"],
  openGraph: {
    title: "Port-Pressure",
    description: "Welcome to our site — here's what we do.",
    url: "https://yourdomain.com/",
    siteName: "Your Site Name",
    images: [
      {
        url: "pressurelogow.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Your Site Name",
    description: "Welcome to our site — here's what we do.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};
