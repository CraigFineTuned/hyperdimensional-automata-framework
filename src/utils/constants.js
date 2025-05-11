/**
 * Application-wide constants
 */

// Level definitions for the Level # System
export const LEVELS = [
  {
    id: 0,
    name: '1D Foundations',
    description: 'Rule 30 and other 1D automata that demonstrate chaos from simplicity',
    color: 'from-blue-500 to-blue-600',
    icon: 'Cube',
    features: ['Binary states', 'Static rules', 'Crystal-like growth patterns']
  },
  {
    id: 1,
    name: '2D Emergence',
    description: 'Conway\'s Game of Life and similar systems that produce gliders and self-replicating patterns',
    color: 'from-green-500 to-emerald-600',
    icon: 'Network',
    features: ['Discrete states', 'Local interactions', 'Glider dynamics']
  },
  {
    id: 2,
    name: '3D Continuum',
    description: 'Lenia-style continuous systems with lifelike organisms and self-organization',
    color: 'from-teal-500 to-cyan-600',
    icon: 'Atom',
    features: ['Continuous states', 'Adaptive rules', 'Pattern stability >85%']
  },
  {
    id: 3,
    name: 'Temporal Evolution',
    description: 'Vector-state systems with evolutionary rules and proto-consciousness metrics',
    color: 'from-purple-500 to-violet-600',
    icon: 'Sparkles',
    features: ['Vector states', 'Evolutionary rules', 'Φ > 0.5 (IIT)']
  },
  {
    id: 4,
    name: 'Quantum Consciousness',
    description: '4D+ quantum systems with entangled states and integrated information',
    color: 'from-pink-500 to-rose-600',
    icon: 'Sparkles',
    features: ['Quantum states', 'Entangled rules', 'Φ > 1.0 + causal architecture']
  }
];

// Predefined patterns for 1D cellular automata
export const PATTERNS_1D = {
  singlePoint: {
    name: 'Single Point',
    description: 'A single active cell in the middle',
    generator: (width) => {
      return { cells: [Math.floor(width / 2)] };
    }
  },
  twoPoints: {
    name: 'Two Points',
    description: 'Two active cells with a gap between',
    generator: (width) => {
      const mid = Math.floor(width / 2);
      return { cells: [mid - 2, mid + 2] };
    }
  },
  threePoints: {
    name: 'Three Points',
    description: 'Three adjacent active cells in the middle',
    generator: (width) => {
      const mid = Math.floor(width / 2);
      return { cells: [mid - 1, mid, mid + 1] };
    }
  },
  random: {
    name: 'Random',
    description: 'Randomly activated cells',
    generator: (width) => {
      const cells = [];
      for (let i = 0; i < width; i++) {
        if (Math.random() > 0.5) {
          cells.push(i);
        }
      }
      return { cells };
    }
  },
  alternating: {
    name: 'Alternating',
    description: 'Every other cell is active',
    generator: (width) => {
      const cells = [];
      for (let i = 0; i < width; i += 2) {
        cells.push(i);
      }
      return { cells };
    }
  }
};

// Common cellular automata rules
export const RULES = {
  // 1D Rules
  rule30: {
    name: 'Rule 30',
    description: 'Generates chaotic, seemingly random patterns',
    ruleNumber: 30
  },
  rule90: {
    name: 'Rule 90',
    description: 'Creates fractal Sierpinski triangle patterns',
    ruleNumber: 90
  },
  rule110: {
    name: 'Rule 110',
    description: 'Turing complete with complex interactions',
    ruleNumber: 110
  },
  rule184: {
    name: 'Rule 184',
    description: 'Models traffic flow and particle motion',
    ruleNumber: 184
  },
  
  // 2D Rules (to be implemented)
  conway: {
    name: 'Conway\'s Game of Life',
    description: 'The classic cellular automaton with simple rules producing complex behaviors',
    surviveConditions: [2, 3],
    birthConditions: [3]
  },
  highlife: {
    name: 'HighLife',
    description: 'Similar to Conway\'s Game of Life but with an additional birth condition',
    surviveConditions: [2, 3],
    birthConditions: [3, 6]
  },
  dayAndNight: {
    name: 'Day & Night',
    description: 'Rule with symmetric behavior between on and off states',
    surviveConditions: [3, 4, 6, 7, 8],
    birthConditions: [3, 6, 7, 8]
  }
};

// Color schemes for visualizations
export const COLOR_SCHEMES = {
  default: {
    background: '#000000',
    cellActive: '#a78bfa', // Purple
    cellInactive: '#000000', // Black
    grid: '#333333'
  },
  ocean: {
    background: '#001220',
    cellActive: '#14b8a6', // Teal
    cellInactive: '#001220', // Dark blue
    grid: '#0a2d40'
  },
  fire: {
    background: '#18100c',
    cellActive: '#f43f5e', // Rose
    cellInactive: '#18100c', // Dark brown
    grid: '#3a2a20'
  },
  forest: {
    background: '#0c1a0f',
    cellActive: '#10b981', // Green
    cellInactive: '#0c1a0f', // Dark green
    grid: '#1a3520'
  },
  spectrum: {
    type: 'gradient',
    gradient: ['#a78bfa', '#ec4899', '#f43f5e', '#10b981', '#14b8a6']
  }
};

export default {
  LEVELS,
  PATTERNS_1D,
  RULES,
  COLOR_SCHEMES
};