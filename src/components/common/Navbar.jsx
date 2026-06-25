import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '../icons/Icons';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-wider ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              SAHARA
            </h1>
            <span className={`text-[0.65rem] tracking-[0.2em] uppercase ${isScrolled ? 'text-amber-700' : 'text-amber-400'}`}>
              Marble & Temple Works
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-amber-500
                  ${currentPage === link.id ? 'text-amber-600' : (isScrolled ? 'text-slate-700' : 'text-white/90')}
                `}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`px-6 py-2 border transition-all duration-300 uppercase tracking-wider text-sm
                ${isScrolled 
                  ? 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-slate-900'}`}
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
              <XIcon size={28} className={isScrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <MenuIcon size={28} className={isScrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 border-t border-gray-100 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`py-4 px-6 text-left uppercase tracking-widest text-sm border-b border-gray-50
                ${currentPage === link.id ? 'text-amber-600 font-bold' : 'text-slate-700'}
              `}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
