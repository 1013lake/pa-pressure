import React from "react";

// Example testimonials data with goofy cat names
const testimonials = [
  {
    name: "Fluffy McSnuggles",
    title: "Purrfessional Napper",
    testimonial:
      "This is the best service I have used for my online business. Highly recommended!",
    imageUrl: "https://i.imgur.com/JELVlxD.jpeg", // Replace with real images
  },
  {
    name: "Sir Meowington",
    title: "Chief Treat Taster",
    testimonial:
      "Incredible support and features that helped us grow. A must-have tool for any business.",
    imageUrl: "https://i.imgur.com/Tt86huy.jpeg", // Replace with real images
  },
  {
    name: "Whiskers McFluffypaws",
    title: "Snooze Specialist",
    testimonial:
      "A game-changer for our marketing efforts. We saw immediate results after using this platform.",
    imageUrl: "https://i.imgur.com/4p8ebpS.jpeg", // Replace with real images
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-900 py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl text-blue-500">
          What Our Clients Say
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={testimonial.imageUrl}
                alt={`Image of ${testimonial.name} the cat, ${testimonial.title}`}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <p className="text-lg font-medium text-gray-300 leading-relaxed">
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
    </section>
  );
}
