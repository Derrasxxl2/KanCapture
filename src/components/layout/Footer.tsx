
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4 font-light">Studio</h3>
            <address className="not-italic text-sm text-gray-600">
              <p>Fran Mesa</p>
            </address>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4 font-light">Contacto</h3>
            <p className="text-sm text-gray-600">
              <a href="tel:+34605311989" className="hover-link">Teléfono: 605311989</a><br />
              <a href="mailto:fran@acaravista.com" className="hover-link">Correo: fran@acaravista.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4 font-light">Follow</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} className="text-gray-600 hover:text-black transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} className="text-gray-600 hover:text-black transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} className="text-gray-600 hover:text-black transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fran Mesa. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover-link mr-4">Política de Privacidad</Link>
            <Link to="/legal-notice" className="hover-link">Aviso Legal</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
