"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Edges from "./edges";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/980clean.jpg", "/980dirty.jpg"]; // Replace with your actual images for Port Pressure

  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 max-h-screen overflow-hidden">
      <Edges size="2xl">
        {/* Gradient Box */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#4C6EF5] to-[#1D4ED8] opacity-20"
          />
        </div>

        {/* Hero Section */}
        <header className="absolute inset-0 z-10 flex justify-between items-center p-6 lg:px-8">
          <div className="flex flex-1"></div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white p-2.5"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="fixed inset-y-0 right-0 w-2/3 bg-gray-900 p-6">
              <ul>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="block py-2 text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="relative flex items-center justify-center pt-1 pb-60 text-white z-10 mt-[30px] max-h-screen">
          <div className="mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-6">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              {/* Increased Text Sizes */}
              <h2 className="text-6xl font-semibold text-blue-400 sm:text-7xl md:text-8xl">
                Welcome to Port Pressure Solutions!
              </h2>
              <p className="mt-4 text-xl text-gray-300 sm:text-2xl md:text-3xl">
                Providing high-efficiency solutions for both industrial and
                residential systems. Get your systems optimized today!
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-blue-500"
                >
                  Get a Quote
                </a>
                <a
                  href="#"
                  className="inline-block ml-4 bg-gray-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-gray-700"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Increased Image Size */}
            <div className="lg:w-1/2 mt-[50px] lg:mt-0 relative w-full h-[600px] overflow-hidden border-4 border-blue-400 rounded-lg">
              <img
                src={images[0]}
                alt="Port Pressure"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  imageIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
              <img
                src={images[1]}
                alt="Port Pressure"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  imageIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            </div>
          </div>
        </main>
      </Edges>
    </div>
  );
}
