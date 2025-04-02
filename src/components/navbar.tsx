"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link"; // Importing next/link

// Mobile navigation links
const mobileNavigation = [
  { name: "Home", href: "/" }, // Link to Home Page
  { name: "Services", href: "/services" }, // Link to Services Page
  { name: "Contact", href: "/contact" }, // Link to Contact Page
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black shadow-lg">
      <nav className="flex items-center py-3 lg:px-8 justify-center">
        {/* Logo */}
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <span className="sr-only">Port Pressure</span>
          <img
            alt="Port Pressure"
            src="/pressurelogow.png" // Replace with your actual logo URL
            className="h-16 w-auto"
          />
        </Link>

        {/* Centered Desktop Links */}
        <div className="hidden lg:flex flex-50 justify-center ml-auto gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold text-white hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-white hover:text-blue-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-white hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden inline-flex items-center justify-center rounded-full bg-blue-500 p-3 text-white hover:bg-blue-400 focus:outline-none ml-auto"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon aria-hidden="true" className="h-8 w-8" />
        </button>

        {/* Get a Quote Button (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm font-semibold text-white hover:text-blue-500"
          >
            Get a Quote <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700/10">
          {/* Close Button */}
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Port Pressure</span>
              <img
                alt="Port Pressure Logo"
                src="/pressurelogow.png"
                className="h-16 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-600">
              <div className="space-y-2 py-6">
                {mobileNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-500"
                    onClick={() => setMobileMenuOpen(false)} // Close the mobile menu after clicking
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact" // Link to the Contact page
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-blue-500"
                  onClick={() => setMobileMenuOpen(false)} // Close menu
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
