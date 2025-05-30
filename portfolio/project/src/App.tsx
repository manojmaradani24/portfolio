import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;