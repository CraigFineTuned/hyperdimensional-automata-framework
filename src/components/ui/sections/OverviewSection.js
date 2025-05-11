import React from 'react';

const OverviewSection = () => {
  return (
    <section className="py-16 bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What is the Hyperdimensional Automata Framework?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              The Hyperdimensional Automata Framework (HAF) is a comprehensive platform for exploring cellular automata systems across multiple dimensions and complexity levels.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From simple 1D rule-based patterns to complex 4D+ quantum systems with proto-consciousness properties, HAF provides tools to visualize, simulate, and understand the emergence of complexity.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Created by <span className="text-purple-400">CrAigFineTuned</span> with the vision to revolutionize our understanding of cellular automata and their relationship to emergence, complexity, and consciousness. The Level # System categorizes automata based on their dimensional properties, state models, and emergent behaviors, creating a clear path from simplicity to hyperdimensional complexity.
            </p>
            <div className="mt-8">
              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('changeTab', { detail: 'levels' }))} 
                className="group btn-primary"
              >
                Explore the Level # System
                <span className="arrow-icon group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"></div>
            <div className="relative bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Unified classification system for cellular automata</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Interactive simulations and visualizations</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Cutting-edge research in complexity and emergence</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Integration of quantum computing concepts</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Metrics for proto-consciousness and complexity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;