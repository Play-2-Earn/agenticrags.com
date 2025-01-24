import React, { useState, useEffect } from "react";
import { Bitcoin, Cpu, Zap, Orbit, Rocket } from "lucide-react";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const openAILink = () => {
    window.open("https://www.b1tcoin.ai/", "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Intense Particle Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.3), transparent 50%)`,
          backgroundBlendMode: "screen",
        }}
      >
        <div className="absolute inset-0 animate-pulse opacity-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"></div>
      </div>

      {/* Glitch Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
        <div className="absolute inset-0 bg-[length:100px_100px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute inset-0 animate-glitch-anim bg-red-500/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hyper-Intense Navigation */}
        <nav className="fixed top-0 left-0 right-0 p-4 backdrop-blur-3xl bg-black/60 border-b border-white/10 animate-pulse-slow">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Rocket className="text-cyan-400 animate-bounce" size={40} />
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-widest uppercase">
                3AgenticRags
              </h1>
            </div>
            <div className="space-x-6 flex items-center">
              {["Crypto", "AI", "DePIN", "Web3"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-bold hover:text-cyan-300 transition-all transform hover:scale-110 hover:tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hyper-Dynamic Hero Section */}
        <main className="container mx-auto px-4 pt-24 min-h-screen flex items-center">
          <div className="text-center space-y-10">
            <div className="relative">
              <h2 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 animate-text-shimmer">
                DECENTRALIZED INTELLIGENCE
              </h2>
              <div className="absolute inset-0 -z-10 bg-white/5 blur-3xl"></div>
            </div>

            <p className="text-2xl max-w-4xl mx-auto text-gray-300 tracking-wide leading-relaxed">
              Web3 Leap in Blockchain: AI-Powered Agents Redefining Crypto
              Ecosystems
            </p>

            <div className="space-x-6 flex justify-center items-center">
              <button
                onClick={openAILink}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-bold 
                  transform hover:scale-110 transition-all duration-300 
                  shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 
                  animate-pulse-slow"
              >
                Launch Bitcoin AI
                <Zap className="inline ml-2" size={24} />
              </button>
              <button
                className="px-10 py-4 border-2 border-white/30 rounded-full 
                hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Explore Technology
                <Orbit className="inline ml-2" size={24} />
              </button>
            </div>
          </div>
        </main>

        {/* Futuristic Features Grid */}
        <section className="container mx-auto mt-16 grid md:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: <Cpu className="text-cyan-400" size={64} />,
              title: "Hyper-Intelligent Networks",
              description:
                "Web3 AI meets blockchain. Unprecedented computational intelligence driving decentralized ecosystems.",
            },
            {
              icon: <Bitcoin className="text-orange-400" size={64} />,
              title: "Crypto Evolution",
              description:
                "Next-generation blockchain protocols powered by adaptive AI agents and advanced cryptographic technologies.",
            },
            {
              icon: <Zap className="text-purple-400" size={64} />,
              title: "Web3 Revolution",
              description:
                "Seamless, secure, and lightning-fast decentralized infrastructure transforming digital interactions.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 p-8 rounded-3xl border border-white/20 
                hover:border-cyan-500/50 transition-all transform hover:scale-105 
                backdrop-blur-xl space-y-4 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
