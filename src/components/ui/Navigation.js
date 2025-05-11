import React, { useState } from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              HAF
            </span>
            <span className="ml-2 text-sm text-gray-400">HyperAutomata</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button 
                onClick={() => setActiveTab('overview')}
                aria-label="Go to Overview"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-800 ${
                  activeTab === 'overview' ? 'bg-gray-800 text-white' : 'text-gray-300'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('levels')}
                aria-label="View Level System"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-800 ${
                  activeTab === 'levels' ? 'bg-gray-800 text-white' : 'text-gray-300'
                }`}
              >
                Level # System
              </button>
              <button 
                onClick={() => setActiveTab('roadmap')}
                aria-label="View Roadmap"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-800 ${
                  activeTab === 'roadmap' ? 'bg-gray-800 text-white' : 'text-gray-300'
                }`}
              >
                Roadmap
              </button>
              <button 
                onClick={() => setActiveTab('applications')}
                aria-label="Explore Applications"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-800 ${
                  activeTab === 'applications' ? 'bg-gray-800 text-white' : 'text-gray-300'
                }`}
              >
                Applications
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div id="mobileMenu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-3 bg-black bg-opacity-90`}>
        <div className="px-2 pt-2 space-y-1 sm:px-3">
          <button 
            onClick={() => {setActiveTab('overview'); toggleMenu();}}
            className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800"
          >
            Overview
          </button>
          <button 
            onClick={() => {setActiveTab('levels'); toggleMenu();}}
            className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800"
          >
            Level # System
          </button>
          <button 
            onClick={() => {setActiveTab('roadmap'); toggleMenu();}}
            className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800"
          >
            Roadmap
          </button>
          <button 
            onClick={() => {setActiveTab('applications'); toggleMenu();}}
            className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800"
          >
            Applications
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;