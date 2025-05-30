import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import skillsData from '../data/skills.json';
import { Skill } from '../types';
import { Code, PaintBucket, FileJson, File, Atom, Wind, GitBranch, Figma, Code2 } from 'lucide-react';

type SkillCategory = 'all' | 'language' | 'framework' | 'tool';

const SkillsSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { skills } = skillsData;
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={24} />;
      case 'PaintBucket':
        return <PaintBucket size={24} />;
      case 'FileJson':
        return <FileJson size={24} />;
      case 'File':
        return <File size={24} />;
      case 'Atom':
        return <Atom size={24} />;
      case 'Wind':
        return <Wind size={24} />;
      case 'GitBranch':
        return <GitBranch size={24} />;
      case 'Figma':
        return <Figma size={24} />;
      case 'Code2':
        return <Code2 size={24} />;
      default:
        return <Code size={24} />;
    }
  };
  
  const filteredSkills = skills.filter((skill) => 
    activeCategory === 'all' || skill.category === activeCategory
  )as Skill[];
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'language', name: 'Languages' },
    { id: 'framework', name: 'Frameworks' },
    { id: 'tool', name: 'Tools' },
  ];
  
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            My <span className={`text-${colorTheme}-500`}>Skills</span>
          </h2>
          <div className={`w-20 h-1 bg-${colorTheme}-500 mx-auto mt-2`}></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? `bg-${colorTheme}-500 text-white`
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4`}>
                  {getIconComponent(skill.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{skill.category}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-300">Proficiency</span>
                  <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className={`bg-${colorTheme}-500 h-2.5 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;