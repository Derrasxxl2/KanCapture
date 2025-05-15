
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'House on the Cliff wins World Architecture Award',
    date: 'May 12, 2023',
    excerpt: 'Our House on the Cliff project has been recognized with the prestigious World Architecture Award in the residential category.',
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'New exhibition at the Venice Biennale',
    date: 'April 3, 2023',
    excerpt: 'Fran Silvestre Arquitectos will be featured in the upcoming Venice Architecture Biennale with an installation exploring the theme of architectural minimalism.',
    image: 'https://images.unsplash.com/photo-1495379572396-5718a35854e3?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    title: 'Studio expansion: New office in Madrid',
    date: 'March 15, 2023',
    excerpt: 'We are excited to announce the opening of our second office location in Madrid, expanding our presence to better serve clients in the capital region.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    title: 'Lecture series: The Poetry of Space',
    date: 'February 28, 2023',
    excerpt: 'Fran Silvestre will be giving a series of lectures on architectural design philosophy at universities across Europe this spring.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60'
  }
];

const NewsPage: React.FC = () => {
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
        <h1 className="text-3xl md:text-4xl font-light mb-12">News</h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {newsItems.map((newsItem) => (
            <motion.article key={newsItem.id} variants={item} className="mb-12">
              <div className="mb-4 overflow-hidden">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-auto aspect-[3/2] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
              <h2 className="text-xl font-light mb-2">{newsItem.title}</h2>
              <p className="text-sm text-gray-800 mb-4">{newsItem.excerpt}</p>
              <a href="#" className="text-sm inline-flex items-center hover-link">
                <span>Read more</span>
                <ArrowRight size={14} className="ml-1" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default NewsPage;
