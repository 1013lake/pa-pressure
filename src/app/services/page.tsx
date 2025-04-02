import React from "react";

import Pricing from "@/components/pricing-sections";

import Testimonial from "@/components/testimonial";

import Services from "@/components/services";

function IndexPage() {
  return (
    <div>
      <Services />
      <Pricing />
      <Testimonial />
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
