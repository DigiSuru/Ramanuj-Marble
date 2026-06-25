import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '../icons/Icons';
import logo from '../../Logo.png';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md py-3 transition-all duration-300" style={{ backgroundColor: '#F0F0F0' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={logo} alt="Ramanuj Marble Logo" className="h-16 md:h-20 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-amber-600
                  ${currentPath === link.path ? 'text-amber-600' : 'text-slate-700'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-6 py-2 border transition-all duration-300 uppercase tracking-wider text-sm border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon size={28} className="text-slate-900" />
            ) : (
              <MenuIcon size={28} className="text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-xl py-4 border-t flex flex-col" style={{ backgroundColor: '#F0F0F0', borderColor: '#e5e5e5' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-4 px-6 text-left uppercase tracking-widest text-sm border-b
                ${currentPath === link.path ? 'text-amber-600 font-bold' : 'text-slate-700'}
              `}
              style={{ borderColor: '#e5e5e5' }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsQuoteModalOpen(true);
            }}
            className="py-4 px-6 text-left uppercase tracking-widest text-sm text-amber-600 font-bold"
          >
            Get Quote
          </button>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
