/*import React from "react";
import homeImage from "../assets/Hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 to-blue-100 px-6"
    >
      <img
        src="https://via.placeholder.com/600x400"
        alt="Hero"
        className="rounded-2xl shadow-lg mb-6"
      />
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Welcome to EZ Lab
      </h2>
      <p className="text-gray-600 max-w-2xl mb-6">
        We design innovative digital solutions that make your workflow simple,
        efficient, and powerful.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}
*/

import React from "react";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gray-100 py-20 px-6"
    >
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">EZ Labs</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          We simplify your digital experience with modern design and smart technology.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}

