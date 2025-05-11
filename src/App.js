import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/ui/Navigation';
import HeroSection from './components/ui/HeroSection';
import Footer from './components/ui/Footer';
import OverviewSection from './components/ui/sections/OverviewSection';
import LevelSystemSection from './components/ui/sections/LevelSystemSection';
import RoadmapSection from './components/ui/sections/RoadmapSection';
import ApplicationsSection from './components/ui/sections/ApplicationsSection';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = window.scrollY;
        const scrollHeight = contentRef.current.scrollHeight - window.innerHeight;
        setScrollProgress((scrollTop / scrollHeight) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans antialiased">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main ref={contentRef} className="pt-16">
        <HeroSection />
        
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'levels' && <LevelSystemSection />}
        {activeTab === 'roadmap' && <RoadmapSection />}
        {activeTab === 'applications' && <ApplicationsSection />}
        
        <Footer setActiveTab={setActiveTab} />
      </main>
    </div>
  );
};

export default App;