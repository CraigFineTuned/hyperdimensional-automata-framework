import React, { useState } from 'react';
import Level0Simulation from '../../simulations/Level0Simulation';

// Import simulations for other levels when available
// import Level1Simulation from '../../simulations/Level1Simulation';
// import Level2Simulation from '../../simulations/Level2Simulation';

const LevelSystemSection = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  // Helper function for icons
  function getIcon(iconName) {
    switch(iconName) {
      case "Cube":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="2" />
            <path d="M4 7v10m16-10v10" />
          </svg>
        );
      case "Network":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case "Atom":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12h20" />
          </svg>
        );
      case "Sparkles":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      default:
        return null;
    }
  }

  // Define levels array
  const levelsData = [
    {
      level: 0,
      title: "1D Foundations",
      description: "Rule 30 and other 1D automata that demonstrate chaos from simplicity",
      color: "from-blue-500 to-blue-600",
      icon: "Cube",
      features: ["Binary states", "Static rules", "Crystal-like growth patterns"]
    },
    {
      level: 1,
      title: "2D Emergence",
      description: "Conway's Game of Life and similar systems that produce gliders and self-replicating patterns",
      color: "from-green-500 to-emerald-600",
      icon: "Network",
      features: ["Discrete states", "Local interactions", "Glider dynamics"]
    },
    {
      level: 2,
      title: "3D Continuum",
      description: "Lenia-style continuous systems with lifelike organisms and self-organization",
      color: "from-teal-500 to-cyan-600",
      icon: "Atom",
      features: ["Continuous states", "Adaptive rules", "Pattern stability >85%"]
    },
    {
      level: 3,
      title: "Temporal Evolution",
      description: "Vector-state systems with evolutionary rules and proto-consciousness metrics",
      color: "from-purple-500 to-violet-600",
      icon: "Sparkles",
      features: ["Vector states", "Evolutionary rules", "Φ > 0.5 (IIT)"]
    },
    {
      level: 4,
      title: "Quantum Consciousness",
      description: "4D+ quantum systems with entangled states and integrated information",
      color: "from-pink-500 to-rose-600",
      icon: "Sparkles",
      features: ["Quantum states", "Entangled rules", "Φ > 1.0 + causal architecture"]
    }
  ];

  return (
    <section className="py-16 bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">The Level # System</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelsData.map((level, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${level.color} flex items-center justify-center mb-4`}>
                {getIcon(level.icon)}
              </div>
              <h3 className="text-xl font-bold mb-2">Level {level.level}</h3>
              <h4 className="text-lg font-semibold mb-3">{level.title}</h4>
              <p className="text-gray-400 mb-4">{level.description}</p>
              <ul className="space-y-2">
                {level.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <button 
                  onClick={() => level.level <= 2 ? setActiveLevel(level.level) : null} 
                  className="group text-purple-400 font-medium flex items-center hover:translate-x-1 transition-transform"
                  disabled={level.level > 2}
                >
                  {level.level <= 2 ? 'Explore simulation' : 'Coming soon...'}
                  {level.level <= 2 && <span className="arrow-icon group-hover:translate-x-1">→</span>}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simulation Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Interactive Simulations</h3>
          
          {/* Level Selection Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button 
              onClick={() => setActiveLevel(0)} 
              className={`px-4 py-2 rounded-lg ${activeLevel === 0 ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-800'}`}
            >
              Level 0: 1D Automata
            </button>
            {/* Enable these buttons when the simulations are available */}
            <button 
              onClick={() => setActiveLevel(1)} 
              className={`px-4 py-2 rounded-lg ${activeLevel === 1 ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-800'} opacity-50 cursor-not-allowed`}
              disabled
            >
              Level 1: 2D Automata
            </button>
            <button 
              onClick={() => setActiveLevel(2)} 
              className={`px-4 py-2 rounded-lg ${activeLevel === 2 ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-800'} opacity-50 cursor-not-allowed`}
              disabled
            >
              Level 2: 3D Automata
            </button>
          </div>
          
          {/* Active Simulation */}
          {activeLevel === 0 && <Level0Simulation />}
          {/* activeLevel === 1 && <Level1Simulation /> */}
          {/* activeLevel === 2 && <Level2Simulation /> */}
          
          {/* Placeholder for unavailable simulations */}
          {activeLevel > 0 && (
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 text-center">
              <p className="text-gray-400">Simulation for Level {activeLevel} is currently under development.</p>
              <p className="text-gray-400 mt-2">Please check back later for updates!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LevelSystemSection;