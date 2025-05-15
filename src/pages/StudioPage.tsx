
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const StudioPage: React.FC = () => {
  return (
    <Layout>
      <motion.div 
        className="container mx-auto px-4 py-24 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-light mb-12">Studio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.img 
              src="https://images.unsplash.com/photo-1600607687126-8a3414349a51?w=800&auto=format&fit=crop&q=60" 
              alt="Studio" 
              className="w-full h-auto"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          <div>
            <h2 className="text-xl font-light mb-4">Architecture as a synthesis</h2>
            <div className="prose text-gray-800 leading-relaxed">
              <p className="mb-4">
                Fran Silvestre Arquitectos is a design studio based in Valencia, Spain. Our work encompasses 
                architecture, interior design, industrial design, and graphic design. We approach each project 
                from a holistic perspective, seeking to create spaces that are both functional and emotionally resonant.
              </p>
              <p className="mb-4">
                Our designs are characterized by their clarity, precision, and rigorous attention to detail. 
                We strive for simplicity and elegance, distilling complex requirements into pure forms and 
                spaces that speak to both the intellect and the senses.
              </p>
              <p>
                Each project begins with a deep understanding of its context—geographical, cultural, and historical. 
                Through a careful analysis of site conditions, client needs, and technological possibilities, we 
                develop architectural solutions that respond intelligently to their surroundings while creating 
                new spatial experiences.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-light mb-3">Philosophy</h3>
            <p className="text-sm text-gray-800">
              Our approach to architecture is grounded in the belief that good design should appear effortless 
              while being the result of rigorous exploration and technical precision. We seek to create spaces 
              that achieve a balance between openness and intimacy, between light and shadow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-light mb-3">Process</h3>
            <p className="text-sm text-gray-800">
              Each project begins with intensive research and dialogue with the client. We develop multiple 
              design concepts, testing ideas through drawings, models, and digital simulations. This iterative 
              process allows us to refine our solutions until they achieve both functional excellence and 
              aesthetic distinction.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-light mb-3">Sustainability</h3>
            <p className="text-sm text-gray-800">
              Environmental responsibility is integral to our practice. We approach sustainability not as an 
              add-on feature but as a fundamental aspect of good design. Through passive strategies, material 
              selection, and technological innovation, we create buildings that minimize resource consumption 
              while maximizing comfort and wellbeing.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default StudioPage;
