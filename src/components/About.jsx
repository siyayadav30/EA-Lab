/*import React from "react";
import aboutImage from "../assets/About.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://via.placeholder.com/400x300"
            alt="About"
            className="rounded-xl shadow-md"
          />
          <p className="text-gray-600 text-lg md:text-left">
            At EZ Lab, we specialize in crafting responsive, user-friendly, and
            visually appealing digital experiences. Our mission is to blend
            technology with creativity to build impactful products that simplify
            your business operations.
          </p>
        </div>
      </div>
    </section>
  );
}
*/

import React from "react";
import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At EZ Labs, we focus on innovation, simplicity, and excellence.
            Our goal is to deliver products that empower users and enhance productivity.
          </p>
          <p className="text-gray-600">
            With a passionate team and cutting-edge technology, we ensure seamless
            solutions for your business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
