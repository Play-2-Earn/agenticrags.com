import React, { useState, useEffect } from "react";


const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white font-sans">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center">
        <div className="text-3xl font-bold">AgenticRags</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Unleashing <span className="text-yellow-400">Bitcoin</span> & AI Synergy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering the next wave of decentralized innovation through blockchain technology, Web3, and Artificial Intelligence. Dive into the future of DePIN (Decentralized Physical Infrastructure Networks).
        </p>
        <button
          onClick={() => window.open('https://www.b1tcoin.ai/', '_blank')}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Explore Bitcoin AI
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About AgenticRags</h2>
          <p className="text-lg">
            At AgenticRags, we are redefining possibilities by merging the principles of Bitcoin with cutting-edge AI technologies. Our mission is to create a decentralized future where physical and digital infrastructures coexist seamlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Bitcoin Innovation</h3>
            <p>
              From Lightning Network integrations to decentralized staking, we harness the power of Bitcoin to build scalable, transparent, and secure systems.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">AI Empowerment</h3>
            <p>
              Leveraging machine learning and neural networks to optimize blockchain processes, predictive modeling, and intelligent automation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Decentralized Infrastructure</h3>
            <p>
              Revolutionizing traditional systems with DePIN solutions for global connectivity, real-time data sharing, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg">
            Unlock the true potential of blockchain and AI with our cutting-edge services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Decentralized Applications</h3>
            <p>
              Design, development, and deployment of Web3 and blockchain-based applications tailored to your needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">AI-Driven Insights</h3>
            <p>
              Empower decision-making with AI algorithms that deliver actionable insights and optimize blockchain performance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">DePIN Solutions</h3>
            <p>
              Building decentralized networks to support physical infrastructure and foster global innovation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Custom Blockchain Projects</h3>
            <p>
              From tokenomics to protocol design, we offer bespoke solutions to bring your ideas to life.
            </p>
          </div>
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

