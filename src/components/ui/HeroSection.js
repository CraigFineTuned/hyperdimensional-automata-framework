import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Hyperdimensional Automata Framework
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3">
            Exploring the frontier of cellular automata, quantum computation, and emergent complexity
          </p>
          <p className="text-md text-gray-400 mb-8">
            Created by <span className="text-purple-400">CrAigFineTuned</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group btn-primary">
              Start Your Journey
              <span className="arrow-icon group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex justify-center">
            <img 
              src="https://picsum.photos/800/400" 
              alt="Hyperdimensional visualization" 
              className="rounded-xl shadow-2xl shadow-purple-500/20 transform transition-all hover:scale-[1.02]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;