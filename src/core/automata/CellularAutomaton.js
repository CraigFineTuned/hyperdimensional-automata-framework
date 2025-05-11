/**
 * Base class for all cellular automata implementations
 */
class CellularAutomaton {
  /**
   * Create a new cellular automaton
   * @param {Object} config - Configuration object
   * @param {Array} config.dimensions - Array of dimension sizes [width, height, depth, ...]
   * @param {Object} config.stateSpace - Definition of the state space (binary, discrete, continuous, etc.)
   * @param {Object} config.rules - Rules for state transitions
   */
  constructor(config) {
    this.dimensions = config.dimensions;
    this.stateSpace = config.stateSpace;
    this.rules = config.rules;
    this.grid = this.initializeGrid();
    this.generation = 0;
    this.isRunning = false;
  }

  /**
   * Initialize the grid based on dimensions and state space
   * @returns {Array} - Initialized grid
   */
  initializeGrid() {
    throw new Error('Method initializeGrid() must be implemented by subclass');
  }

  /**
   * Apply rules to evolve the grid one step
   */
  step() {
    throw new Error('Method step() must be implemented by subclass');
  }

  /**
   * Get the current state of the grid
   * @returns {Array} - Current grid state
   */
  getState() {
    return this.grid;
  }

  /**
   * Reset the grid to a clean state
   */
  reset() {
    this.grid = this.initializeGrid();
    this.generation = 0;
  }

  /**
   * Set a specific cell to a given state
   * @param {Array} coordinates - Cell coordinates [x, y, z, ...]
   * @param {*} state - New state value
   */
  setCell(coordinates, state) {
    throw new Error('Method setCell() must be implemented by subclass');
  }

  /**
   * Get the state of a specific cell
   * @param {Array} coordinates - Cell coordinates [x, y, z, ...]
   * @returns {*} - Cell state
   */
  getCell(coordinates) {
    throw new Error('Method getCell() must be implemented by subclass');
  }

  /**
   * Start automatic evolution of the grid
   * @param {number} interval - Time between steps in milliseconds
   * @returns {number} - Interval ID for stopping later
   */
  start(interval = 100) {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.step();
    }, interval);
    
    return this.intervalId;
  }

  /**
   * Stop automatic evolution
   */
  stop() {
    if (!this.isRunning) return;
    
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  /**
   * Set the grid to a predefined pattern
   * @param {Object} pattern - Pattern configuration
   */
  setPattern(pattern) {
    throw new Error('Method setPattern() must be implemented by subclass');
  }
}

export default CellularAutomaton;