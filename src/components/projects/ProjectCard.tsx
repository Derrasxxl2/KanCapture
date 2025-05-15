
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div variants={item} className="grid-item">
      <Link to={`/project/${project.slug}`}>
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={project.cover_image} 
            alt={project.title} 
            className="grid-image" 
          />
          <div className="grid-caption">
            <h3 className="text-base font-light">{project.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{project.location}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
