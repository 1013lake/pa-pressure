"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

// Mobile navigation links
const mobileNavigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

// Reusable MobileMenuButton component
const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="lg:hidden inline-flex items-center justify-center rounded-full bg-blue-500 p-3 text-white hover:bg-blue-400 focus:outline-none ml-auto"
    aria-label="Open mobile menu"
  >
    <Bars3Icon className="h-8 w-8" />
  </button>
);

// Reusable MobileMenu component
const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Dialog open={open} onClose={onClose} className="lg:hidden">
    <div className="fixed inset-0 z-50" />
    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700/10">
      {/* Close Button */}
      <div className="flex items-center justify-between">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Port Pressure</span>
          <Image
            alt="Port Pressure Logo"
            src="/pressurelogow.png"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="-m-2.5 rounded-md p-2.5 text-white"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
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
                onClick={onClose} // Close the mobile menu after clicking
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="py-6">
            <Link
              href="/contact"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-blue-500"
              onClick={onClose}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black shadow-lg">
      <nav className="flex items-center py-3 lg:px-8 justify-center">
        {/* Logo */}
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <span className="sr-only">Port Pressure</span>
          <Image
            alt="Port Pressure"
            src="/pressurelogow.png"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </Link>

        {/* Centered Desktop Links */}
        <div className="hidden lg:flex flex-50 justify-center ml-auto gap-x-12">
          {mobileNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-white hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />

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
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
