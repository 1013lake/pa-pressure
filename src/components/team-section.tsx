import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import Edges from "./edges"; // Import the Edges component

// Updated team members
const people = [
  {
    name: "Dan Blake",
    role: "Owner / Operator",
    imageUrl: "/pressurelogow.png", // Make sure this image path is correct
    altText: "Dan Blake portrait",
    width: 64,
    height: 64,
  },
  {
    name: "Brendo",
    role: "Company High Jacker", // Role for Brendo
    imageUrl: "/pressurelogow.png", // Add the correct image path for Brendo
    altText: "Brendo portrait",
    width: 64,
    height: 64,
  },
  {
    name: "Rene",
    role: "Mentor", // Role for Rene
    imageUrl: "/pressurelogow.png", // Add the correct image path for Rene
    altText: "Rene portrait",
    width: 64,
    height: 64,
  },
];

export default function Team() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      {/* Wrapping the content inside the Edges component */}
      <Edges size="2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            {/* Title */}
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meet Our Team
            </h2>
            {/* Description */}
            <p className="mt-6 text-lg text-gray-400">
              We’re a dynamic group of individuals who are born and raised in
              Port Alberni, passionate about what we do, and dedicated to
              delivering the best results for our clients.
            </p>
          </div>

          {/* List of team members */}
          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name} className="flex items-center gap-x-6">
                <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    alt={person.altText}
                    src={person.imageUrl}
                    width={person.width}
                    height={person.height}
                    className="object-cover"
                    priority // Priority for above-the-fold images
                    sizes="(max-width: 768px) 25vw, 10vw" // Responsively adjust the size
                    quality={75} // Set image quality for faster load
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-500">
                    {person.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Edges>
    </div>
  );
}
