import CellularAutomaton from './CellularAutomaton';

/**
 * Implementation of a one-dimensional cellular automaton (e.g., Rule 30, Rule 90)
 */
class OneDimensionalAutomaton extends CellularAutomaton {
  /**
   * Create a new 1D cellular automaton
   * @param {Object} config - Configuration object
   * @param {number} config.width - Width of the grid
   * @param {number} config.ruleNumber - Rule number (0-255) defining the automaton behavior
   * @param {boolean} config.periodic - Whether the grid wraps around at the edges
   */
  constructor(config) {
    const dimensions = [config.width];
    const stateSpace = { type: 'binary' }; // 1D automata typically use binary states
    const rules = { ruleNumber: config.ruleNumber || 30 };
    
    super({
      dimensions,
      stateSpace,
      rules
    });
    
    this.history = []; // Store previous states for visualization
    this.historyLimit = config.historyLimit || 100; // Maximum number of states to store
    this.periodic = config.periodic !== undefined ? config.periodic : true;
    this.ruleTable = this.generateRuleTable(rules.ruleNumber);
  }

  /**
   * Initialize the grid for a 1D automaton
   * @returns {Array} - 1D array of cells
   */
  initializeGrid() {
    const width = this.dimensions[0];
    const grid = new Array(width).fill(0);
    
    // Set the middle cell to 1 for a typical starting point
    grid[Math.floor(width / 2)] = 1;
    
    this.history = [grid.slice()]; // Store initial state
    
    return grid;
  }

  /**
   * Generate a rule table based on the rule number
   * @param {number} ruleNumber - Rule number (0-255)
   * @returns {Object} - Mapping from 3-cell patterns to new state
   */
  generateRuleTable(ruleNumber) {
    const ruleTable = {};
    const binaryRule = ruleNumber.toString(2).padStart(8, '0');
    
    // Generate all possible 3-cell combinations and map to the new state
    for (let i = 0; i < 8; i++) {
      const pattern = i.toString(2).padStart(3, '0');
      ruleTable[pattern] = parseInt(binaryRule[7 - i], 10);
    }
    
    return ruleTable;
  }

  /**
   * Apply the rule to evolve the automaton one step
   */
  step() {
    const currentState = this.grid;
    const width = this.dimensions[0];
    const newState = new Array(width).fill(0);
    
    for (let i = 0; i < width; i++) {
      // Get the three cells (left, center, right) that determine the next state
      const left = i === 0 ? (this.periodic ? currentState[width - 1] : 0) : currentState[i - 1];
      const center = currentState[i];
      const right = i === width - 1 ? (this.periodic ? currentState[0] : 0) : currentState[i + 1];
      
      // Create the pattern and look up the new state in the rule table
      const pattern = `${left}${center}${right}`;
      newState[i] = this.ruleTable[pattern];
    }
    
    this.grid = newState;
    this.history.push(newState.slice());
    
    // Keep history size within limit
    if (this.history.length > this.historyLimit) {
      this.history.shift();
    }
    
    this.generation++;
    
    return this.grid;
  }

  /**
   * Get the evolution history
   * @returns {Array} - Array of previous states
   */
  getHistory() {
    return this.history;
  }

  /**
   * Set a cell to a specific state
   * @param {number} index - Cell index
   * @param {number} state - New state (0 or 1)
   */
  setCell(index, state) {
    if (index >= 0 && index < this.dimensions[0]) {
      this.grid[index] = state;
      this.history[this.history.length - 1] = this.grid.slice();
    }
  }

  /**
   * Get the state of a specific cell
   * @param {number} index - Cell index
   * @returns {number} - Cell state (0 or 1)
   */
  getCell(index) {
    if (index >= 0 && index < this.dimensions[0]) {
      return this.grid[index];
    }
    return null;
  }

  /**
   * Set the automaton to use a different rule
   * @param {number} ruleNumber - New rule number (0-255)
   */
  setRule(ruleNumber) {
    this.rules.ruleNumber = ruleNumber;
    this.ruleTable = this.generateRuleTable(ruleNumber);
  }

  /**
   * Set a predefined pattern
   * @param {Object} pattern - Pattern configuration
   * @param {Array} pattern.cells - Array of indexes to set to 1
   */
  setPattern(pattern) {
    this.reset();
    if (pattern && pattern.cells) {
      for (const index of pattern.cells) {
        if (index >= 0 && index < this.dimensions[0]) {
          this.grid[index] = 1;
        }
      }
      this.history[0] = this.grid.slice();
    }
  }
}

export default OneDimensionalAutomaton;