import React from "react";
import Image from "next/image"; // Import Next.js Image component for optimization

// Example testimonials data with local Vancouver Island names
const testimonials = [
  {
    name: "Jamie Roberts",
    title: "Port Alberni Local Business Owner",
    testimonial:
      "Port Pressure Solutions has been an absolute game-changer for my business. Their service is top-notch and their team really understands the local community. Highly recommend!",
    imageUrl: "/avatar.png", // Ensure the correct path for images
    width: 80, // Set image width
    height: 80, // Set image height
  },
  {
    name: "Alexis Green",
    title: "Nanaimo Entrepreneur",
    testimonial:
      "The team at Port Pressure Solutions helped me streamline my operations and saved me countless hours. They're quick, efficient, and always go above and beyond.",
    imageUrl: "/avatar.png", // Ensure the correct path for images
    width: 80, // Set image width
    height: 80, // Set image height
  },
  {
    name: "Charlie MacDonald",
    title: "Victoria Freelancer",
    testimonial:
      "Working with Port Pressure Solutions has been an amazing experience. They provided invaluable insight and excellent customer service. I’ll be using them again for sure!",
    imageUrl: "/avatar.png", // Ensure the correct path for images
    width: 80, // Set image width
    height: 80, // Set image height
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-0 lg:py-0 text-white">
      {/* Reduced padding */}
      <div className="bg-gradient-to-r from-[#000141] to-[#006492]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Keep padding smaller */}
          <h2 className="text-2xl font-semibold text-center sm:text-3xl text-white">
            {/* Reduced text size */}
            What Our Vancouver Island Clients Say
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Reduced gap */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 mb-4 relative">
                  <Image
                    src={testimonial.imageUrl}
                    alt={`Image of ${testimonial.name}, ${testimonial.title}`}
                    width={testimonial.width}
                    height={testimonial.height}
                    className="rounded-full object-cover border-4 border-blue-500"
                  />
                </div>
                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                  {/* Reduced font size */}
                  {testimonial.testimonial}
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
