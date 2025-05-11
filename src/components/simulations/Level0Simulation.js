import React, { useEffect, useRef, useState } from 'react';
import OneDimensionalAutomaton from '../../core/automata/OneDimensionalAutomaton';

const Level0Simulation = () => {
  const canvasRef = useRef(null);
  const [automaton, setAutomaton] = useState(null);
  const [rule, setRule] = useState(30);
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [isRunning, setIsRunning] = useState(false);
  const [cellSize, setCellSize] = useState(4);
  const [speed, setSpeed] = useState(100);
  const intervalRef = useRef(null);
  
  // Initialize the automaton
  useEffect(() => {
    const width = Math.floor(size.width / cellSize);
    const newAutomaton = new OneDimensionalAutomaton({
      width,
      ruleNumber: rule,
      historyLimit: Math.floor(size.height / cellSize)
    });
    
    setAutomaton(newAutomaton);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [rule, size.width, size.height, cellSize]);
  
  // Draw the automaton on canvas
  useEffect(() => {
    if (!automaton || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const history = automaton.getHistory();
    
    // Draw each line of the history
    history.forEach((line, lineIndex) => {
      line.forEach((cell, cellIndex) => {
        if (cell === 1) {
          ctx.fillStyle = '#a78bfa'; // Purple color for living cells
          ctx.fillRect(cellIndex * cellSize, lineIndex * cellSize, cellSize, cellSize);
        }
      });
    });
  }, [automaton, cellSize]);
  
  // Handle animation
  useEffect(() => {
    if (isRunning && automaton) {
      intervalRef.current = setInterval(() => {
        automaton.step();
        setAutomaton(prevAutomaton => {
          // Create a new object reference to trigger re-render
          return Object.create(Object.getPrototypeOf(prevAutomaton), Object.getOwnPropertyDescriptors(prevAutomaton));
        });
      }, speed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, automaton, speed]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('level0-container');
      if (container) {
        const width = container.clientWidth;
        setSize({ width, height: Math.min(400, width * 0.67) });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle rule change
  const handleRuleChange = (e) => {
    const newRule = parseInt(e.target.value, 10);
    setRule(newRule);
    if (automaton) {
      automaton.setRule(newRule);
      setAutomaton(prevAutomaton => {
        return Object.create(Object.getPrototypeOf(prevAutomaton), Object.getOwnPropertyDescriptors(prevAutomaton));
      });
    }
  };
  
  // Handle cell size change
  const handleCellSizeChange = (e) => {
    const newCellSize = parseInt(e.target.value, 10);
    setCellSize(newCellSize);
  };
  
  // Handle speed change
  const handleSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value, 10);
    setSpeed(newSpeed);
  };
  
  // Toggle running state
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };
  
  // Reset automaton
  const resetAutomaton = () => {
    if (automaton) {
      automaton.reset();
      setAutomaton(prevAutomaton => {
        return Object.create(Object.getPrototypeOf(prevAutomaton), Object.getOwnPropertyDescriptors(prevAutomaton));
      });
    }
  };
  
  // Set random initial state
  const setRandomInitialState = () => {
    if (automaton) {
      const width = automaton.dimensions[0];
      const randomCells = [];
      
      // Randomly set cells to 1
      for (let i = 0; i < width; i++) {
        if (Math.random() > 0.5) {
          randomCells.push(i);
        }
      }
      
      automaton.setPattern({ cells: randomCells });
      setAutomaton(prevAutomaton => {
        return Object.create(Object.getPrototypeOf(prevAutomaton), Object.getOwnPropertyDescriptors(prevAutomaton));
      });
    }
  };
  
  // Set a single point initial state
  const setSinglePointInitialState = () => {
    if (automaton) {
      const width = automaton.dimensions[0];
      automaton.setPattern({ cells: [Math.floor(width / 2)] });
      setAutomaton(prevAutomaton => {
        return Object.create(Object.getPrototypeOf(prevAutomaton), Object.getOwnPropertyDescriptors(prevAutomaton));
      });
    }
  };
  
  return (
    <div id="level0-container" className="w-full">
      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Level 0: 1D Cellular Automata</h3>
          <p className="text-gray-400">Explore one-dimensional cellular automata like Rule 30, showing how complex patterns can emerge from simple rules.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <canvas 
              ref={canvasRef} 
              width={size.width} 
              height={size.height} 
              className="bg-black rounded-lg"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Rule</label>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={rule} 
                  onChange={handleRuleChange}
                  className="w-32"
                />
                <span className="w-10 text-center">{rule}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Cell Size</label>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={cellSize} 
                  onChange={handleCellSizeChange}
                  className="w-32"
                />
                <span className="w-10 text-center">{cellSize}px</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Speed</label>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={speed} 
                  onChange={handleSpeedChange}
                  className="w-32"
                />
                <span className="w-10 text-center">{speed}ms</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                onClick={toggleRunning} 
                className={`px-4 py-2 rounded-lg ${isRunning ? 'bg-rose-600' : 'bg-green-600'}`}
              >
                {isRunning ? 'Stop' : 'Start'}
              </button>
              <button 
                onClick={resetAutomaton} 
                className="px-4 py-2 rounded-lg bg-gray-700"
              >
                Reset
              </button>
              <button 
                onClick={setRandomInitialState} 
                className="px-4 py-2 rounded-lg bg-purple-600"
              >
                Random
              </button>
              <button 
                onClick={setSinglePointInitialState} 
                className="px-4 py-2 rounded-lg bg-blue-600"
              >
                Single Point
              </button>
            </div>
            
            <div className="mt-4 p-3 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-1">About Rule {rule}</h4>
              <p className="text-sm text-gray-400">
                Rule {rule} is a one-dimensional cellular automaton where each cell's state is determined by its own state and the state of its two immediate neighbors according to the binary representation of {rule}: {rule.toString(2).padStart(8, '0')}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level0Simulation;