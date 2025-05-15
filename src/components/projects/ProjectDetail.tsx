
import React from 'react';
import { Project } from '../../types';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-24 md:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center hover-link">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to projects</span>
        </Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-2">{project.title}</h1>
        <p className="text-gray-600">{project.location}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-2">
          <motion.img 
            src={project.cover_image} 
            alt={project.title} 
            className="w-full h-auto"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {project.images?.map((image, index) => (
            <motion.img 
              key={index}
              src={image} 
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-auto mt-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            />
          ))}
        </div>
        
        <div>
          <div className="sticky top-32">
            <div className="mb-8">
              <h2 className="text-sm uppercase tracking-wider mb-2 font-light">About</h2>
              <div className="prose text-sm text-gray-800 leading-relaxed">
                <p>{project.description}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-sm uppercase tracking-wider mb-2 font-light">Details</h2>
              <dl className="text-sm">
                <div className="flex flex-col mb-3">
                  <dt className="text-gray-600">Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="flex flex-col mb-3">
                  <dt className="text-gray-600">Type</dt>
                  <dd>{project.category}</dd>
                </div>
                <div className="flex flex-col mb-3">
                  <dt className="text-gray-600">Location</dt>
                  <dd>{project.location}</dd>
                </div>
                {project.area && (
                  <div className="flex flex-col mb-3">
                    <dt className="text-gray-600">Area</dt>
                    <dd>{project.area}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
