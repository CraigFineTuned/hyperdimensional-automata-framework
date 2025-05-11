# Hyperdimensional Automata Framework (HAF)

![HAF Logo](https://picsum.photos/200/100)

HAF is a comprehensive framework for exploring cellular automata across multiple dimensions, from simple 1D rule systems to complex 4D+ quantum automata.

## Created By

**CrAigFineTuned** (craigfinetuned@gmail.com)

## Project Vision

The Hyperdimensional Automata Framework was created by CrAigFineTuned to revolutionize our understanding of cellular automata and their relationship to emergence, complexity, and consciousness. By extending traditional cellular automata into higher dimensions and incorporating principles from quantum mechanics and information theory, HAF aims to bridge the gap between computational models and the fundamental nature of reality itself.

## Overview

The Hyperdimensional Automata Framework provides tools and visualizations for understanding and experimenting with cellular automata at different levels of complexity. From Rule 30 and Conway's Game of Life to continuous 3D systems and quantum cellular automata, HAF offers a structured approach to exploring emergent complexity through its unique Level # System.

## Key Features

- **Level # System**: A coherent framework for categorizing cellular automata by dimension, state complexity, and rule sophistication
- **Interactive Simulations**: Visual and interactive implementations of various cellular automata
- **Parameter Exploration**: Tools for exploring rule spaces and discovering interesting patterns
- **Educational Content**: Comprehensive explanations and tutorials on cellular automata concepts
- **Research Tools**: Advanced metrics for measuring emergence and complexity

## The Level # System

HAF's core organizing principle is the Level # System, which categorizes cellular automata into five levels:

- **Level 0**: 1D Foundations (Rule 30, Rule 110, etc.)
- **Level 1**: 2D Emergence (Conway's Game of Life, etc.)
- **Level 2**: 3D Continuum (Lenia-style continuous systems)
- **Level 3**: Temporal Evolution (Vector-state systems with evolutionary rules)
- **Level 4**: Quantum Consciousness (4D+ quantum systems with entangled states)

Each level represents a significant increase in complexity and computational capability.

## Getting Started

### Prerequisites

- Node.js 18+
- NPM 9+

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/haf.git
cd haf
```

2. Install dependencies:
```
npm install
```

3. Install 3D visualization dependencies (optional):
```
npm run install-3d
```

4. Start the development server:
```
npm start
```

### Building for Production

```
npm run build
```

## Usage

### 1D Automata (Level 0)

Explore one-dimensional cellular automata like Rule 30 and Rule 110:

```javascript
import { OneDimensionalAutomaton } from 'haf/core';

const rule30 = new OneDimensionalAutomaton({
  width: 100,
  ruleNumber: 30
});

// Evolve the automaton one step
rule30.step();

// Get the current state
const currentState = rule30.getState();
```

### 2D Automata (Level 1)

Experiment with two-dimensional cellular automata like Conway's Game of Life:

```javascript
import { TwoDimensionalAutomaton } from 'haf/core';

const gameOfLife = new TwoDimensionalAutomaton({
  width: 50,
  height: 50,
  rule: 'conway'
});

// Set a glider pattern
gameOfLife.setPattern('glider', { x: 10, y: 10 });

// Evolve the automaton
gameOfLife.step();
```

## Documentation

- [Level # System](docs/theory/level_system.md): Explanation of the classification framework
- [Implementation Plan](planning/implementation_plan.md): Development roadmap and progress
- [API Reference](docs/reference): Detailed documentation of available classes and methods

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Stephen Wolfram for pioneering work on cellular automata
- John Conway for the Game of Life
- Bert Wang-Chak Chan for Lenia
- Countless researchers advancing our understanding of emergent complexity

## Contact

For questions, suggestions, or collaborations, please contact: craigfinetuned@gmail.com

---

**HAF: Exploring the frontier of cellular automata, quantum computation, and emergent complexity**