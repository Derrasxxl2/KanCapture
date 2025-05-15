
import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectGrid from '../components/projects/ProjectGrid';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: 'House on the Cliff',
    slug: 'house-on-the-cliff',
    description: 'Situated on a steep cliff overlooking the Mediterranean Sea, this minimalist residence features clean lines and expansive views. The cantilevered structure appears to float above the rugged terrain, creating a dramatic juxtaposition between architecture and nature.',
    category: 'Residential',
    year: '2023',
    location: 'Alicante, Spain',
    area: '500 m²',
    cover_image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 2,
    title: 'Balint House',
    slug: 'balint-house',
    description: 'The Balint House is characterized by its elegant curves and pristine white exterior. Floor-to-ceiling windows create a seamless connection between indoor spaces and the surrounding landscape.',
    category: 'Residential',
    year: '2022',
    location: 'Valencia, Spain',
    area: '580 m²',
    cover_image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 3,
    title: 'Aluminum House',
    slug: 'aluminum-house',
    description: 'The Aluminum House features a striking white façade with precision-cut openings that frame views of the surrounding olive groves. The interior features minimalist details and a carefully curated palette of materials.',
    category: 'Residential',
    year: '2021',
    location: 'Madrid, Spain',
    area: '420 m²',
    cover_image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1622015663084-307d19eabbbf?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 4,
    title: 'Silicon House',
    slug: 'silicon-house',
    description: 'Silicon House explores the relationship between interior and exterior spaces through a series of interconnected volumes. Large openings dissolve boundaries while preserving privacy.',
    category: 'Residential',
    year: '2020',
    location: 'Barcelona, Spain',
    area: '390 m²',
    cover_image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 5,
    title: 'UTV Office',
    slug: 'utv-office',
    description: 'This office building features a clean, geometric design with an emphasis on natural light and flexible workspaces. The minimalist aesthetic creates a calm environment conducive to creativity and productivity.',
    category: 'Commercial',
    year: '2022',
    location: 'Valencia, Spain',
    area: '1,200 m²',
    cover_image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 6,
    title: 'Hofmann House',
    slug: 'hofmann-house',
    description: 'The Hofmann House is designed as a series of overlapping horizontal planes that extend into the landscape. Its minimalist form emphasizes horizontal lines and creates dramatic cantilevers.',
    category: 'Residential',
    year: '2019',
    location: 'Mallorca, Spain',
    area: '650 m²',
    cover_image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&auto=format&fit=crop&q=60'
    ]
  }
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Banner de ancho completo */}
        <div className="w-full h-[70vh] relative mb-16">
          <img 
            src="/lovable-uploads/d68f7b25-23b5-437a-809c-096b9405242a.png" 
            alt="Fran Mesa Construcción" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Texto introductorio */}
        <motion.div 
          className="container mx-auto px-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-xl md:text-2xl uppercase tracking-wider font-light mb-6">Sobre Fran Mesa</h2>
          <div className="max-w-3xl text-sm md:text-base text-gray-700 font-light space-y-4">
            <p>Fran Mesa es una constructora especializada en proyectos de arquitectura contemporánea de alto nivel.</p>
            <p>Nuestro enfoque combina precisión técnica, estética minimalista y una ejecución impecable.</p>
            <p>Trabajamos mano a mano con estudios de arquitectura y clientes particulares para materializar espacios únicos, funcionales y atemporales.</p>
            <p>Nuestro compromiso con la calidad y el detalle nos convierte en una referencia dentro del sector de la construcción moderna.</p>
          </div>
        </motion.div>

        {/* Cuadrícula de proyectos */}
        <ProjectGrid projects={projects} />
      </div>
    </Layout>
  );
};

export default HomePage;
