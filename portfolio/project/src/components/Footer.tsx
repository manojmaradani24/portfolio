import React from 'react';
import { useTheme } from '../context/ThemeContext';
import socialData from '../data/social.json';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { colorTheme } = useTheme();
  const { socialLinks } = socialData;
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={18} />;
      case 'Linkedin':
        return <Linkedin size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return null;
    }
  };
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
              <span className={`text-${colorTheme}-500`}>Port</span>folio
            </a>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Frontend Developer | UI/UX Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-${colorTheme}-100 dark:hover:bg-${colorTheme}-900 hover:text-${colorTheme}-500 dark:hover:text-${colorTheme}-400 transition-colors`}
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} My Portfolio Website. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Built with <span className={`text-${colorTheme}-500`}>React</span> and <span className={`text-${colorTheme}-500`}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;