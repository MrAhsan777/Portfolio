
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Three.js Animated Background */}
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
