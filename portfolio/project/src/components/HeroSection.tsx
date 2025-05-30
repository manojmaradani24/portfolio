import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ChevronDown, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import aboutData from '../data/about.json';
import { useSpring, animated } from '@react-spring/web';
import { ParallaxBanner } from 'react-scroll-parallax';

const HeroSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const { name, title, profileImage, resumeUrl } = aboutData.about;
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springProps = useSpring({
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { tension: 100, friction: 10 },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <ParallaxBanner
        layers={[
          {
            image: '/assets/akash-W3a338EL.jpg',
            speed: -20,
            opacity: [1, 0.5],
          },
        ]}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/70 dark:from-black/90 dark:to-gray-900/70" />
      </ParallaxBanner>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-screen flex items-center">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ opacity }}
        >
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className={`text-${colorTheme}-400 font-medium mb-3 tracking-wider`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-red mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {name}
            </motion.h1>
            
            <motion.div
              className="text-xl sm:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter
                options={{
                  strings: [title, "Frontend Developer", "UI/UX Enthusiast", "Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 20,
                }}
              />
            </motion.div>
            
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <animated.a 
                href="#contact" 
                style={springProps}
                className={`px-8 py-4 bg-${colorTheme}-500 hover:bg-${colorTheme}-600 text-white rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 text-lg font-medium flex items-center gap-2`}
              >
                Let's Connect
              </animated.a>
              
              <animated.a 
                href={resumeUrl} 
                style={springProps}
                className="px-8 py-4 border-2 border-white/30 hover:border-red-500/50 text-green rounded-full transition-all hover:shadow-xl transform hover:scale-105 duration-300 text-lg font-medium flex items-center gap-2 backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} />
                Resume
              </animated.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-full" />
            <motion.div 
              className={`relative w-72 h-72 sm:w-96 sm:h-96 mx-auto rounded-full border-4 border-${colorTheme}-500/50 p-2 shadow-2xl overflow-hidden backdrop-blur-sm`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt={name} 
                className="w-full h-full object-cover rounded-full"
              />
              <motion.div 
                className={`absolute -bottom-4 -right-4 w-28 h-28 bg-${colorTheme}-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12`}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>B.Tech</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-red/70 hover:text-red"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm mb-2 tracking-wider">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;