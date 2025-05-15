
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Fran Silvestre',
    position: 'Founder & Principal Architect',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60',
    bio: 'Fran Silvestre founded the studio in 2005 after collaborating with Alvaro Siza. His work has been recognized with numerous international awards and has been published in prestigious architectural journals worldwide.'
  },
  {
    id: 2,
    name: 'María Masià',
    position: 'Partner & Design Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
    bio: 'María leads the design team and oversees all aspects of project development from concept to completion. Her approach combines rigorous analysis with creative intuition.'
  },
  {
    id: 3,
    name: 'Carlos García',
    position: 'Project Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
    bio: 'Carlos manages project teams and coordinates with consultants and contractors to ensure that our designs are executed with precision and care.'
  },
  {
    id: 4,
    name: 'Elena Ruiz',
    position: 'Interior Design Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
    bio: 'Elena brings her expertise in materials, finishes, and furniture design to create cohesive interior environments that complement our architectural vision.'
  },
  {
    id: 5,
    name: 'Pablo Martínez',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
    bio: 'Pablo oversees the technical development of our projects, ensuring that our designs meet all functional requirements while maintaining their aesthetic integrity.'
  },
  {
    id: 6,
    name: 'Lucia Torres',
    position: 'Visualization Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
    bio: 'Lucia creates photorealistic renderings and animations that help clients visualize and understand our design proposals before construction begins.'
  }
];

const PeoplePage: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

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
    <Layout>
      <motion.div 
        className="container mx-auto px-4 py-24 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-light mb-12">Team</h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={item} className="mb-12">
              <div className="mb-4 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto aspect-[3/4] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-light">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{member.position}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default PeoplePage;
