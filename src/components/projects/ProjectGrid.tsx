
import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
