import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Resume from './components/sections/Resume';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      
      <main className="pt-16">
        <Home onSectionChange={scrollToSection} />
        <Portfolio />
        <Blog />
        <Resume />
        <About />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">NextByKrrutik</h3>
          <p className="text-gray-400 mb-6">
            Built with passion for innovation and excellence.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:krrutik.kini@nyu.edu" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a 
              href="https://linkedin.com/in/krrutik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a href="/assets/Krutik_Kini_Resume.pdf" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;