/*import React from "react";
import contactImage from "../assets/Contact.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
*/


import React from "react";
import contactImage from "../assets/contact.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question or want to work with us? Fill the form or reach out directly.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
