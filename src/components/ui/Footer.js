import React from 'react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="bg-black bg-opacity-80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              HAF
            </span>
            <p className="text-gray-400 mt-2">Hyperdimensional Automata Framework</p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => window.open('https://github.com', '_blank')} className="text-gray-400 hover:text-white transition-colors">GitHub</button>
            <button onClick={() => setActiveTab('roadmap')} className="text-gray-400 hover:text-white transition-colors">Documentation</button>
            <button onClick={() => setActiveTab('applications')} className="text-gray-400 hover:text-white transition-colors">Research</button>
            <button onClick={() => setActiveTab('overview')} className="text-gray-400 hover:text-white transition-colors">Community</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p className="mb-2">© {new Date().getFullYear()} Hyperdimensional Automata Framework. All rights reserved.</p>
          <p>Created by <a href="mailto:craigfinetuned@gmail.com" className="text-purple-400 hover:text-purple-300">CrAigFineTuned</a> with the vision of revolutionizing our understanding of cellular automata and emergent complexity.</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;