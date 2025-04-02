import React from "react";
import Edges from "./edges"; // Import Edges component

function ContactForm() {
  return (
    <div className="relative isolate bg-gray-900 text-white py-16 lg:py-24">
      {/* Background Gradient Box */}
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

      {/* Wrapping the content inside the Edges component */}
      <Edges size="2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
          </div>

          {/* Contact Form Section */}
          <form action="/api/contact" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 text-xl text-gray-900 rounded-md bg-blue-300 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg text-white mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 text-xl text-gray-900 rounded-md bg-blue-300 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg text-white mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message..."
                required
                className="w-full p-4 text-xl text-gray-900 rounded-md bg-blue-300 border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Edges>
    </div>
  );
}

export default ContactForm;
