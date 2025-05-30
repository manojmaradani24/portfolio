import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeContextType, ThemeMode, ColorTheme } from '../types';

const defaultContext: ThemeContextType = {
  themeMode: 'light',
  colorTheme: 'blue',
  toggleThemeMode: () => {},
  setColorTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');

  useEffect(() => {
    // Load theme preferences from localStorage
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeMode;
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme;
    
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeMode('dark');
    }
    
    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme mode to the document
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preferences to localStorage
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('colorTheme', colorTheme);
  }, [themeMode, colorTheme]);

  const toggleThemeMode = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleSetColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        colorTheme,
        toggleThemeMode,
        setColorTheme: handleSetColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};