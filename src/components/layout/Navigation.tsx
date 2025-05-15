
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Projects', path: '/' },
    { label: 'Studio', path: '/studio' },
    { label: 'People', path: '/people' },
    { label: 'Contact', path: '/contact' },
    { label: 'News', path: '/news' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-40 flex flex-col overflow-y-auto"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex-grow flex flex-col items-center justify-center py-20 px-6">
            <nav className="text-center">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-3xl font-light tracking-wider hover:text-gray-500 transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="py-6 px-6 text-center">
            <div className="text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Fran Silvestre Arquitectos</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
