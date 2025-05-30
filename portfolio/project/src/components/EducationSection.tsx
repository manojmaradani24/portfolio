import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import educationData from '../data/education.json';
import { Education } from '../types';

const EducationSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const { education } = educationData;
  
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            My <span className={`text-${colorTheme}-500`}>Education</span>
          </h2>
          <div className={`w-20 h-1 bg-${colorTheme}-500 mx-auto mt-2`}></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-${colorTheme}-200 dark:bg-${colorTheme}-900 h-full`} style={{ marginLeft: '7px' }}></div>
            
            {/* Timeline items */}
            {education.map((item: Education, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? 'sm:pl-1/2 sm:mr-auto sm:ml-0'
                    : 'sm:pr-1/2 sm:ml-auto sm:mr-0'
                } pl-10 sm:pl-0 sm:w-1/2`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-${colorTheme}-500 bg-white dark:bg-gray-900`} 
                  style={{ top: '5px', marginLeft: '7px' }}
                ></div>
                
                {/* Content */}
                <div className={`${
                  index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'
                } bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}>
                  <div className={`text-sm text-white bg-${colorTheme}-500 inline-block px-3 py-1 rounded-full mb-2`}>
                    {item.startDate} - {item.endDate}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.degree}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.institution}, {item.location}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {item.field}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;