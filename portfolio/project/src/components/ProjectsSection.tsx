import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import projectsData from '../data/projects.json';
import { Project } from '../types';

type ProjectCategory = 'all' | string;

const ProjectsSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects } = projectsData;
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = projects.filter((project: Project) => 
    activeCategory === 'all' || project.tags.includes(activeCategory)
  );
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            My <span className={`text-${colorTheme}-500`}>Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-${colorTheme}-500 mx-auto mt-2`}></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'all'
                ? `bg-${colorTheme}-500 text-white`
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === tag
                  ? `bg-${colorTheme}-500 text-white`
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                {project.featured && (
                  <div className={`absolute top-0 right-0 bg-${colorTheme}-500 text-white text-xs px-3 py-1 rounded-bl-lg`}>
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-xs px-3 py-1 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 text-${colorTheme}-700 dark:text-${colorTheme}-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => openModal(project)}
                  className={`w-full py-2 rounded-lg bg-${colorTheme}-500 hover:bg-${colorTheme}-600 text-white transition-colors flex items-center justify-center gap-2`}
                >
                  <ExternalLink size={16} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-xs px-3 py-1 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 text-${colorTheme}-700 dark:text-${colorTheme}-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg bg-${colorTheme}-500 hover:bg-${colorTheme}-600 text-white transition-colors flex items-center gap-2`}
                    >
                      <Link size={18} />
                      Live Demo
                    </a>
                  )}
                  
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <Github size={18} />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;