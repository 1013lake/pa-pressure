import React from "react";
import Edges from "./edges"; // Make sure you import the Edges component

// Example testimonials data with local Vancouver Island names
const testimonials = [
  {
    name: "Jamie Roberts",
    title: "Port Alberni Local Business Owner",
    testimonial:
      "Port Pressure Solutions has been an absolute game-changer for my business. Their service is top-notch and their team really understands the local community. Highly recommend!",
    imageUrl: "https://i.imgur.com/JELVlxD.jpeg", // Replace with real images
  },
  {
    name: "Alexis Green",
    title: "Nanaimo Entrepreneur",
    testimonial:
      "The team at Port Pressure Solutions helped me streamline my operations and saved me countless hours. They're quick, efficient, and always go above and beyond.",
    imageUrl: "https://i.imgur.com/Tt86huy.jpeg", // Replace with real images
  },
  {
    name: "Charlie MacDonald",
    title: "Victoria Freelancer",
    testimonial:
      "Working with Port Pressure Solutions has been an amazing experience. They provided invaluable insight and excellent customer service. I’ll be using them again for sure!",
    imageUrl: "https://i.imgur.com/4p8ebpS.jpeg", // Replace with real images
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 text-white">
      <div className="bg-gradient-to-r from-[#000141] to-[#006492]">
        {/* Removed the gradient from Edges */}
        <Edges size="2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center sm:text-4xl text-white">
              What Our Vancouver Island Clients Say
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={testimonial.imageUrl}
                    alt={`Image of ${testimonial.name}, ${testimonial.title}`}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
                  />
                  <p className="text-lg font-medium text-gray-300 leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Edges>
      </div>
    </section>
  );
}
