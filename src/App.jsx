import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white font-sans">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center">
        <div className="text-3xl font-bold">AgenticRags</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#solutions" className="hover:text-yellow-400">
            Solutions
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Empowering AI with Knowledge and Agency
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Transform decision-making with intelligent, retrieval-augmented
          generative systems designed for real-time insights and autonomous
          action.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Explore Our Solutions
          </button>
          <button
            onClick={() => window.open("https://www.b1tcoin.ai/", "_blank")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            We are pioneers in Agentic RAGs—AI systems that combine
            retrieval-augmented generation with autonomous decision-making. Our
            mission is to bring intelligent, contextual, and actionable AI
            solutions to businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p>
              At AgenticRags, we integrate cutting-edge retrieval systems,
              generative AI, and agentic reasoning to deliver systems that don’t
              just inform but act.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <p>
              From real-time knowledge access to dynamic problem-solving, our
              solutions redefine AI’s potential.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 md:px-20 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg">
            Unlock the true potential of blockchain and AI with our cutting-edge
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Dynamic Knowledge Retrieval
            </h3>
            <p>
              Delivering real-time, domain-specific insights to power AI across
              industries.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Autonomous Agentic AI</h3>
            <p>
              AI that doesn’t just generate—it reasons, decides, and acts
              autonomously to solve complex problems.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Industry-Specific Customization
            </h3>
            <p>
              Tailored solutions to meet the unique needs of your domain,
              ensuring relevance and accuracy.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
            <p>
              Easily integrate our systems into your existing workflows and
              infrastructure for rapid deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
            <p>
              Revolutionizing diagnostics, patient management, and medical
              research.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Finance</h3>
            <p>
              Enhancing fraud detection, market analysis, and automated trading.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Legal</h3>
            <p>
              Streamlining document retrieval, case analysis, and compliance
              monitoring.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
            <p>
              Personalizing customer interactions and optimizing inventory
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-6 md:px-20 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        </div>
        <ul className="space-y-6">
          <li className="text-lg">
            <strong>Real-Time Intelligence:</strong> Access the most relevant
            knowledge when you need it.
          </li>
          <li className="text-lg">
            <strong>Autonomous Agents:</strong> Let AI act, refine, and adapt
            independently.
          </li>
          <li className="text-lg">
            <strong>Domain Expertise:</strong> Custom-built solutions for your
            unique challenges.
          </li>
          <li className="text-lg">
            <strong>Scalable Solutions:</strong> Grow with systems that evolve
            alongside your business.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 px-6 md:px-20 text-center bg-blue-900">
        <h2 className="text-4xl font-bold mb-6">
          Ready to transform the way your business thinks, learns, and acts?
        </h2>
        <div className="space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Contact Us Today
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-black text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AgenticRags. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;


