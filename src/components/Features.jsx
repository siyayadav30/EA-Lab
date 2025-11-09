/*import React from "react";
import featureImg1 from "../assets/Features1.jpg";
import featureImg2 from "../assets/Features2.jpg";
import featureImg3 from "../assets/Features3.jpg";

const features = [
  {
    title: "Fast Performance",
    description: "Experience blazing fast load times and smooth navigation.",
    image: featureImg1,
  },
  {
    title: "Secure Platform",
    description: "Your data is protected with top-grade encryption.",
    image: featureImg2,
  },
  {
    title: "User Friendly",
    description: "Designed for simplicity and ease of use.",
    image: featureImg3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
*/

import React from "react";
import featureImg from "../assets/Features.jpg"; // apni image ka exact naam likhna

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6"
    >
      {/* Left: Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Our <span className="text-blue-600">Key Feature</span>
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-md">
          EZ Labs brings you cutting-edge solutions with speed, security,
          and innovation. We focus on simplifying your work through smart technology.
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>⚡ Fast and Reliable Performance</li>
          <li>🔒 Highly Secure Environment</li>
          <li>💡 User-Friendly Experience</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </div>

      {/* Right: Image Section */}
      <div className="flex-1 mt-10 md:mt-0">
        <img
          src={featureImg}
          alt="Feature"
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
