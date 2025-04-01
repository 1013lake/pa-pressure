import React from "react";

// Define a type for each link object
interface Link {
  href: string;
  text: string;
}

// FooterSection component to handle each section (Locations, Services, Follow Us)
const FooterSection = ({ title, links }: { title: string; links: Link[] }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="mt-4 space-y-2 text-sm">
      {links && links.length > 0 ? (
        links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-blue-400">
              {link.text}
            </a>
          </li>
        ))
      ) : (
        <li>No links available</li>
      )}
    </ul>
  </div>
);

const Footer = () => {
  // Links for each section in arrays
  const locationsLinks = [
    { href: "#", text: "Port Alberni" },
    { href: "#", text: "Qualicum Beach" },
    { href: "#", text: "Parksville" },
    { href: "#", text: "Courtenay" },
    { href: "#", text: "Campbell River" },
    { href: "#", text: "Nanaimo" },
    { href: "#", text: "Duncan" },
    { href: "#", text: "Ladysmith" },
  ];

  const servicesLinks = [
    { href: "#", text: "Pressure Washing" },
    { href: "#", text: "Heavy Duty Equipment Cleaning" },
    { href: "#", text: "Driveway Cleaning" },
    { href: "#", text: "Fence Cleaning" },
    { href: "#", text: "Bin Cleaning" },
    { href: "#", text: "Dumpster Pad Cleaning" },
    { href: "#", text: "Cement Cleaning" },
    { href: "#", text: "Deck Cleaning" },
  ];

  const followUsLinks = [
    { href: "#", text: "Facebook" },
    { href: "#", text: "Instagram" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#000141] to-[#006492] text-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Using FooterSection component for each section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FooterSection title="Locations" links={locationsLinks} />
          <FooterSection title="Services" links={servicesLinks} />
          <FooterSection title="Follow Us" links={followUsLinks} />
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 Port Pressure Solutions, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
