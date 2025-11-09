import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">EZ Lab</h1>
        <nav className="space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}

