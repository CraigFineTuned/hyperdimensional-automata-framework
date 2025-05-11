import React from 'react';

const RoadmapSection = () => {
  return (
    <section className="py-16 bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Development Roadmap</h2>
        
        <div className="relative border-l-2 border-purple-500 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-6 pb-6">
          {/* Phase 1 */}
          <div className="mb-12 relative">
            <div className="absolute -left-8 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-1">Phase 1: Foundation</h3>
              <p className="text-sm text-purple-400 mb-4">Completed</p>
              <p className="text-gray-300 mb-4">Establishing the core framework and concepts</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Basic web application with Level # System description
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Initial UI framework and navigation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Documentation and concept overview
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Level 0 (1D) simulations implementation
                </li>
              </ul>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="mb-12 relative">
            <div className="absolute -left-8 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-1">Phase 2: Interactive Simulations</h3>
              <p className="text-sm text-purple-400 mb-4">Current</p>
              <p className="text-gray-300 mb-4">Building functional simulations for each level</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Interactive 1D automata simulations
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  2D Game of Life implementation (In Progress)
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  3D continuous automata (In Progress)
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  User-adjustable parameters for simulations
                </li>
              </ul>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="mb-12 relative">
            <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-1">Phase 3: Advanced Features</h3>
              <p className="text-sm text-gray-400 mb-4">Q4 2025 - Q1 2026</p>
              <p className="text-gray-300 mb-4">Implementing higher-level automata and community features</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Advanced 3D visualization techniques
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Performance optimizations for complex simulations
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  User accounts and pattern sharing
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Interactive tutorials and learning resources
                </li>
              </ul>
            </div>
          </div>
          
          {/* Phase 4 */}
          <div className="relative">
            <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold mb-1">Phase 4: Research Integration</h3>
              <p className="text-sm text-gray-400 mb-4">2026 and beyond</p>
              <p className="text-gray-300 mb-4">Connecting with cutting-edge research and quantum computing</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Integrated information theory metrics
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Quantum automata simulations
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Research collaboration tools
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    </svg>
                  </span>
                  Neural network integration for rule discovery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;