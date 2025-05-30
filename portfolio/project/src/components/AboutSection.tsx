import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import aboutData from '../data/about.json';
import socialData from '../data/social.json';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const { name, longBio } = aboutData.about;
  const { socialLinks } = socialData;
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About <span className={`text-${colorTheme}-500`}>Me</span>
          </h2>
          <div className={`w-20 h-1 bg-${colorTheme}-500 mx-auto mt-2`}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Hello, I'm  {name}
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              {longBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-${colorTheme}-500 hover:text-white transition-colors`}
                    aria-label={link.name}
                  >
                    {getIconComponent(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Education & Status
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4 shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">B.Tech in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">Vishnu Institue Of Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2027 (Expected)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4 shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Current Status</h4>
                  <p className="text-gray-600 dark:text-gray-300">2nd Year Student</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Learning Frontend Development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4 shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Looking For</h4>
                  <p className="text-gray-600 dark:text-gray-300">Internship Opportunities</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Development / Frontend</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;