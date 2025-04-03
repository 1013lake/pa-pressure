"use client";

import { useState, useEffect } from "react";
import Edges from "./edges";
import Link from "next/link"; // Import Link for Next.js navigation
import Image from "next/image"; // Import Image component for optimized images

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { src: "/980clean.jpg", width: 1920, height: 1080 }, // Add image dimensions for optimization
    { src: "/980dirty.jpg", width: 1920, height: 1080 }, // Add image dimensions for optimization
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate bg-gray-900 px-6 py-30 sm:py-16 lg:px-8 max-h-screen overflow-hidden">
      {/* Background Gradient Box (old background stays) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#4C6EF5] to-[#1D4ED8] opacity-20"
        />
      </div>

      {/* Wrapping the content inside the Edges component */}
      <Edges size="2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main Content */}
          <main className="relative flex items-center justify-center pt-1 pb-24 text-white z-10 mt-[30px] sm:mt-16 lg:mt-0">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-6">
              <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 sm:mt-16">
                {/* Split Heading into Two Parts */}
                <h2 className="text-5xl font-semibold text-blue-400 sm:text-6xl md:text-7xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-white">Port Pressure</span>
                </h2>
                <p className="mt-4 text-lg text-gray-300 sm:text-xl md:text-2xl">
                  Providing high-efficiency solutions for both industrial and
                  residential systems. Get your systems optimized today!
                </p>

                {/* Add Flexbox to stack buttons vertically on small screens */}
                <div className="mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:w-full sm:mt-6">
                  <Link
                    href="/contact" // Link to the Contact page
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-500 transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/services" // Link to the Services page
                    className="inline-block bg-gray-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Increased Image Size */}
              <div className="lg:w-1/2 mt-[50px] lg:mt-0 relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden border-4 border-blue-400 rounded-lg sm:mt-8">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={images[imageIndex].src}
                    alt="Port Pressure"
                    width={images[imageIndex].width}
                    height={images[imageIndex].height}
                    className="object-cover w-full h-full transition-all duration-500"
                    priority={imageIndex === 0} // Prioritize the first image load for faster LCP
                    loading={imageIndex === 0 ? "eager" : "lazy"} // Eager loading for the first image, lazy for others
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Edges>
    </div>
  );
}
