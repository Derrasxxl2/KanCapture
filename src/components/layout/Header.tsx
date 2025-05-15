
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 py-4 px-6 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <Link to="/" className="text-lg tracking-tight uppercase font-light">
          Fran Silvestre Arquitectos
        </Link>
      </div>
      <button 
        onClick={toggleMenu} 
        className="p-2 focus:outline-none transition-all duration-300"
      >
        {isMenuOpen ? (
          <X size={24} strokeWidth={1} />
        ) : (
          <Menu size={24} strokeWidth={1} />
        )}
      </button>
    </header>
  );
};

export default Header;
