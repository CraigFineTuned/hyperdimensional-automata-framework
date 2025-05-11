import React from 'react';

const ApplicationsSection = () => {
  return (
    <section className="py-16 bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Applications & Use Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Application 1 */}
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Artificial Life</h3>
            <p className="text-gray-400 mb-4">Modeling and studying the emergence of life-like behaviors in simulation environments.</p>
            <p className="text-gray-300 text-sm">Applications include biological modeling, evolutionary algorithms, and synthetic biology research.</p>
          </div>

          {/* Application 2 */}
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Complex Systems</h3>
            <p className="text-gray-400 mb-4">Understanding emergence, self-organization, and pattern formation in complex adaptive systems.</p>
            <p className="text-gray-300 text-sm">Used in economics, urban planning, traffic modeling, and social system simulations.</p>
          </div>

          {/* Application 3 */}
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
            <p className="text-gray-400 mb-4">Novel approaches to AI and machine learning based on cellular automata principles.</p>
            <p className="text-gray-300 text-sm">Applications in neural cellular automata, evolutionary algorithms, and pattern recognition.</p>
          </div>

          {/* Application 4 */}
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-gray-400 mb-4">Novel algorithms and approaches based on quantum cellular automata.</p>
            <p className="text-gray-300 text-sm">Exploring quantum information processing, entanglement dynamics, and quantum algorithms.</p>
          </div>
        </div>

        {/* Research Projects */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-8">Current Research Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
            <h4 className="text-xl font-bold mb-3">Consciousness Metrics in Automata</h4>
            <p className="text-gray-300 mb-4">Exploring how integrated information theory can be applied to measure proto-consciousness in complex automata systems.</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Integrated Information</span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Phi (Φ) Metric</span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Causal Architecture</span>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
            <h4 className="text-xl font-bold mb-3">Quantum Entanglement in Multi-Dimensional Automata</h4>
            <p className="text-gray-300 mb-4">Investigating how quantum entanglement affects the behavior and emergent properties of cellular automata in higher dimensions.</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Quantum States</span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Entanglement Patterns</span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Non-locality</span>
            </div>
          </div>
        </div>
        
        {/* Publications */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-8">Related Publications</h3>
        <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
          <ul className="space-y-6">
            <li>
              <h4 className="text-lg font-semibold mb-1">Emergent Complexity in Higher-Dimensional Cellular Automata</h4>
              <p className="text-gray-400">Smith, J., Johnson, P., & Garcia, M. (2024)</p>
              <p className="text-gray-300 mt-2">A comprehensive survey of recent developments in higher-dimensional cellular automata and their applications in modeling complex systems.</p>
            </li>
            <li>
              <h4 className="text-lg font-semibold mb-1">Quantum Cellular Automata: A New Computational Paradigm</h4>
              <p className="text-gray-400">Nguyen, L., & Patel, K. (2023)</p>
              <p className="text-gray-300 mt-2">Explores the theoretical foundations and potential applications of quantum cellular automata in quantum information processing.</p>
            </li>
            <li>
              <h4 className="text-lg font-semibold mb-1">Vector-State Automata and the Emergence of Proto-Consciousness</h4>
              <p className="text-gray-400">Lee, T., Abrahams, D., & Thompson, E. (2024)</p>
              <p className="text-gray-300 mt-2">Investigates the relationship between vector-state cellular automata, integrated information theory, and the emergence of consciousness-like properties in computational systems.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;