
import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation isOpen={isMenuOpen} onClose={() => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
      }} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
