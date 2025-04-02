import React from "react";
import Edges from "./edges"; // Ensure Edges component is imported

// Example service images, replace with actual images
const services = [
  { id: 1, name: "Heavy Machinery Cleaning", imageUrl: "/980clean.jpg" },
  { id: 2, name: "Walkways", imageUrl: "/brick.jpg" },
  { id: 3, name: "Driveways / Cement", imageUrl: "/driveway.jpg" },
  { id: 4, name: "Grafitti Removal", imageUrl: "/graffiti.jpg" },
  { id: 5, name: "Bin Cleaning", imageUrl: "/bluetrash.jpg" },
  { id: 6, name: "Pad Cleaning,", imageUrl: "/padcleaning.jpeg" },
  { id: 7, name: "Exterior House Wash", imageUrl: "/siding.png" },
  { id: 8, name: "Decking", imageUrl: "/wood.png" },
  { id: 9, name: "Gutter Cleaning", imageUrl: "/gutter.jpg" }, // Adding a 9th item
];

export default function ServicesProvided() {
  return (
    <section className="bg-gray-900 text-white py-16 lg:py-24 sm:pt-24 pt-10">
      {/* Wrapping the section inside Edges to match the consistent theme */}
      <Edges size="1xl">
        <div className="px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center sm:text-4xl text-blue-400 mb-8">
            Services We Provide
          </h2>

          {/* Grid layout with three rows and three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center bg-blue-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-full h-48 relative">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium text-gray-900 mt-4">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Edges>
    </section>
  );
}
