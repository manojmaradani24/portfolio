import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ColorTheme } from '../types';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const colorOptions: { name: ColorTheme; color: string }[] = [
  { name: 'blue', color: 'bg-blue-500' },
  { name: 'purple', color: 'bg-purple-500' },
  { name: 'green', color: 'bg-green-500' },
  { name: 'orange', color: 'bg-orange-500' },
  { name: 'pink', color: 'bg-pink-500' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);
  const { themeMode, toggleThemeMode, colorTheme, setColorTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleColorMenu = () => setShowColorMenu(!showColorMenu);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className={`text-${colorTheme}-500`}>Port</span>folio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-600 hover:text-${colorTheme}-500 dark:text-gray-300 dark:hover:text-${colorTheme}-400 transition-colors`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleThemeMode}
                className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300`}
                aria-label="Toggle theme"
              >
                {themeMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="relative">
                <button
                  onClick={toggleColorMenu}
                  className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300`}
                  aria-label="Change theme color"
                >
                  <Palette size={20} />
                </button>

                <AnimatePresence>
                  {showColorMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                    >
                      <div className="flex space-x-2">
                        {colorOptions.map((option) => (
                          <button
                            key={option.name}
                            onClick={() => {
                              setColorTheme(option.name);
                              setShowColorMenu(false);
                            }}
                            className={`w-6 h-6 rounded-full ${option.color} ${
                              colorTheme === option.name
                                ? 'ring-2 ring-gray-400 dark:ring-gray-300'
                                : ''
                            }`}
                            aria-label={`Set ${option.name} theme`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleThemeMode}
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300`}
              aria-label="Toggle theme"
            >
              {themeMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Open menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-2 text-gray-600 hover:text-${colorTheme}-500 dark:text-gray-300 dark:hover:text-${colorTheme}-400`}
                >
                  {link.name}
                </a>
              ))}
              <div className="py-2">
                <p className="text-gray-500 dark:text-gray-400 mb-2">Theme Color</p>
                <div className="flex space-x-3">
                  {colorOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => setColorTheme(option.name)}
                      className={`w-8 h-8 rounded-full ${option.color} ${
                        colorTheme === option.name
                          ? 'ring-2 ring-gray-400 dark:ring-gray-300'
                          : ''
                      }`}
                      aria-label={`Set ${option.name} theme`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;