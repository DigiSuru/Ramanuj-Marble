import React, { useState, useEffect } from 'react';

// --- INLINE SVG ICONS ---
const MenuIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const XIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const PhoneIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPinIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const ChevronRightIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>;
const ArrowRightIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const InstagramIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const FacebookIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const MessageCircleIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>;
const CheckCircleIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
const ShieldIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>;
const AwardIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const ClockIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

// --- DATA MOCKS ---
const CONTACT_INFO = {
  phone: "+91 XXXXXXXXXX",
  whatsapp: "+91 9252145887",
  email: "info@saharamarble.com",
  address: "Makrana Road, Makrana, Rajasthan 341505, India"
};

const CATEGORIES = ["All", "Marble Temples", "Marble Murti", "Marble Statues", "Marble Slabs", "Custom Work"];

const PRODUCTS = [
  { 
    id: 1, 
    name: "Premium White Marble Temple", 
    category: "Marble Temples", 
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: true,
    description: "Handcrafted from pure Makrana white marble, this premium temple features intricate floral carvings, domed architecture (shikhar), and a highly polished finish that resists yellowing over time. Perfect for creating a divine focal point in your home.",
    applications: ["Home Pooja Rooms", "Office Reception Temples", "Spiritual Centers", "Premium Gifting"]
  },
  { 
    id: 2, 
    name: "Radha Krishna Murti", 
    category: "Marble Murti", 
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: true,
    description: "A mesmerizing depiction of divine love. This Radha Krishna idol is carved from a single block of flawless white marble, featuring 24-carat gold leaf highlights, meenakari art, and expressive facial features carefully sculpted by master artisans.",
    applications: ["Temple Installations", "Home Altars", "Vastu Placements", "Wedding Gifts"]
  },
  { 
    id: 3, 
    name: "Italian Statuario Slab", 
    category: "Marble Slabs", 
    image: "https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: true,
    description: "Imported premium grade Italian Statuario marble slabs known for their striking grey veining against a pure white background. Book-matched cutting is available to create breathtaking seamless patterns for luxury interiors.",
    applications: ["Luxury Flooring", "Kitchen Countertops", "Bathroom Wall Cladding", "Living Room Feature Walls"]
  },
  { 
    id: 4, 
    name: "Custom Carved Elephant", 
    category: "Marble Statues", 
    image: "https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: false,
    description: "Symbolizing wisdom and royal heritage, this hand-carved marble elephant features exquisite traditional jali (lattice) work. It is carved using a unique undercut technique where a smaller elephant is carved inside the outer shell.",
    applications: ["Home Decor", "Entrance Flanking", "Garden Ornaments", "Corporate Gifts"]
  },
  { 
    id: 5, 
    name: "Makrana Kumari Marble", 
    category: "Marble Slabs", 
    image: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: false,
    description: "The pride of Rajasthan, Makrana Kumari marble offers incredible durability and a beautiful milky white base with subtle straight grey lines. It is widely known for never losing its shine and high calcium content.",
    applications: ["Heavy Traffic Flooring", "Staircases", "Outdoor Paving", "Sculpture Bases"]
  },
  { 
    id: 6, 
    name: "Ganesha Marble Idol", 
    category: "Marble Murti", 
    image: "https://images.unsplash.com/photo-1582560469781-1965b92a6135?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: true,
    description: "Bring prosperity and remove obstacles with this beautifully proportioned Lord Ganesha marble murti. Polished to a high gloss and adorned with natural mineral color painting for a vibrant, lasting spiritual presence.",
    applications: ["Home Entrance", "New Office Inaugurations", "Pooja Rooms", "Car Dashboards (Miniatures)"]
  },
  { 
    id: 7, 
    name: "Intricate Pooja Mandir", 
    category: "Marble Temples", 
    image: "https://images.unsplash.com/photo-1622397815608-333d06cb32dd?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: false,
    description: "A compact yet highly detailed pooja mandir designed for modern apartments. Features a smooth base, carved pillars, and built-in diya (lamp) holders, all crafted from pure Makrana marble.",
    applications: ["Apartment Pooja Rooms", "Wall-mounted Altars", "Office Cabins"]
  },
  { 
    id: 8, 
    name: "CNC Marble Jali Work", 
    category: "Custom Work", 
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", 
    price: "On Request", 
    isFeatured: false,
    description: "Precision-cut geometric and floral lattice screens (Jali) made using state-of-the-art CNC technology combined with hand finishing. Allows for beautiful light play and natural ventilation.",
    applications: ["Room Dividers", "Exterior Facades", "Window Screens", "Staircase Railings"]
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=800",
];

// --- COMPONENTS ---

const ProductModal = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur hover:bg-white text-slate-900 p-2 rounded-full transition-colors border border-gray-200 shadow-sm"
        >
          <XIcon size={20} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold rounded shadow">
            {product.category}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">{product.name}</h2>
          <div className="text-amber-600 font-medium text-lg mb-6 pb-4 border-b border-gray-100">{product.price}</div>
          
          <div className="flex-1">
            <h3 className="text-sm tracking-[0.1em] uppercase text-slate-400 font-bold mb-2">Description</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <h3 className="text-sm tracking-[0.1em] uppercase text-slate-400 font-bold mb-3">Ideal Applications</h3>
            <ul className="space-y-3 mb-8">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start text-slate-700 text-sm">
                  <CheckCircleIcon size={18} className="text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-auto flex gap-4">
            <button 
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="flex-1 bg-slate-900 text-white py-3 md:py-4 uppercase tracking-widest text-sm font-bold hover:bg-amber-600 transition-colors rounded"
            >
              Enquire via Form
            </button>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello Sahara Marble, I am interested in inquiring about the *${product.name}*.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white p-3 md:p-4 hover:bg-[#20b858] transition-colors rounded"
              title="Enquire on WhatsApp"
            >
              <MessageCircleIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-slate-950 text-white pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl font-bold tracking-wider mb-2 text-white">SAHARA</h2>
          <p className="text-amber-500 text-xs tracking-[0.2em] uppercase mb-6">Marble & Temple Works</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Pioneers in luxury marble craftsmanship from Makrana. We bring stones to life through divine murtis, majestic temples, and premium slabs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><FacebookIcon size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-400 hover:text-amber-500 text-sm transition-colors flex items-center"
                >
                  <ChevronRightIcon size={14} className="mr-2" /> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Our Products</h3>
          <ul className="space-y-3">
            {['Marble Temples', 'Marble Murtis', 'Statues & Arts', 'Marble Slabs', 'Custom Inlay Work'].map(item => (
              <li key={item}>
                <span className="text-gray-400 text-sm flex items-center">
                  <ChevronRightIcon size={14} className="mr-2" /> {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start text-gray-400 text-sm">
              <MapPinIcon size={18} className="mr-3 text-amber-500 shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center text-gray-400 text-sm">
              <PhoneIcon size={18} className="mr-3 text-amber-500 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center text-gray-400 text-sm">
              <MailIcon size={18} className="mr-3 text-amber-500 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sahara Marble & Temple Works. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Luxury & Elegance</p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircleIcon size={28} />
    <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none whitespace-nowrap">
      Chat with us!
    </span>
  </a>
);

// --- PAGES ---

const HomePage = ({ setCurrentPage }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Marble Architecture" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="block text-amber-400 tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in-up">
            Crafting Eternity in Stone
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Exquisite Marble <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Masterpieces</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            From divine temple structures to premium Makrana slabs. Discover the finest craftsmanship from the heart of Rajasthan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-amber-600 text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-amber-700 transition-colors w-full sm:w-auto"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border border-white text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-slate-900 transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              Request Inquiry <ArrowRightIcon size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-amber-600/10 transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=800" 
                alt="Marble Crafting" 
                className="w-full h-auto object-cover shadow-2xl rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-amber-600 text-sm tracking-[0.2em] uppercase mb-3 font-bold">The Heritage</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Generations of <br/>Master Craftsmanship
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Based in Makrana, the city of world-renowned white marble, Sahara Marble & Temple Works has been a symbol of purity and artistic excellence for over three decades. We don't just cut stone; we breathe life into it.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Direct from Makrana Mines",
                  "Custom Designs & Dimensions",
                  "World-wide Export & Installation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircleIcon size={20} className="text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setCurrentPage('about')}
                className="group flex items-center text-amber-700 font-bold uppercase tracking-wider text-sm"
              >
                Read Our Story 
                <span className="block h-[1px] w-8 bg-amber-700 ml-3 group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 tracking-[0.2em] uppercase text-sm font-bold">Curated Selection</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2 mb-4">Featured Collections</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.isFeatured).map(product => (
              <div 
                key={product.id} 
                className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100 flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wider font-bold text-slate-800 rounded-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <h3 className="font-serif text-xl text-slate-900 mb-2">{product.name}</h3>
                  <button 
                    className="text-amber-600 text-sm font-bold uppercase tracking-wider hover:text-slate-900 transition-colors mt-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('products')}
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-slate-900 hover:text-white transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80" 
            alt="Texture" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Need a Custom Design?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Share your vision, dimensions, and reference designs. Our artisans will carve your imagination into reality with pure Makrana marble.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-amber-600 text-white px-10 py-4 uppercase tracking-wider font-bold hover:bg-amber-500 transition-colors shadow-lg shadow-amber-600/30"
          >
            Contact Our Experts
          </button>
        </div>
      </section>

      {/* Product Modal overlay for Homepage */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onInquire={() => setCurrentPage('contact')}
      />
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
    {/* Header */}
    <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80" alt="Marble texture" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Sahara Marble</h1>
        <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-8 mt-16">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-serif text-slate-900 mb-6">The Legacy of Makrana</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Founded over 30 years ago, Sahara Marble & Temple Works stands at the intersection of traditional artistry and modern precision. Located in Makrana, Rajasthan—the sole source of the marble used in the Taj Mahal—we possess an intimate understanding of this divine stone.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our mission is to preserve the ancient art of stone carving while providing our global clients with unparalleled quality in marble temples, statues, and premium architectural slabs. Every piece that leaves our workshop carries the soul of the artisan and the purity of the stone.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=400" alt="Crafting" className="rounded-tl-3xl rounded-br-3xl shadow-lg w-full h-64 object-cover" />
          <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=400" alt="Detailing" className="rounded-tr-3xl rounded-bl-3xl shadow-lg w-full h-64 object-cover mt-8" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: <AwardIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Premium Quality", text: "We source only the highest grade of marble, ensuring longevity and a brilliant natural luster." },
          { icon: <ShieldIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Authenticity", text: "100% genuine Makrana marble guaranteed. We believe in transparency and trust." },
          { icon: <ClockIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Timely Delivery", text: "Professional project management ensures your custom orders are delivered on schedule." }
        ].map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            {feature.icon}
            <h3 className="text-xl font-serif text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProductsPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16 text-center relative overflow-hidden mb-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collections</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore our range of premium marble products crafted with devotion.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold text-slate-800 rounded">
                  {product.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-lg text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-amber-600 font-medium text-sm mb-4">{product.price}</p>
                <div className="mt-auto">
                  <button 
                    className="w-full py-2 bg-slate-900 text-white text-sm uppercase tracking-wider font-medium hover:bg-amber-600 transition-colors rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found in this category.
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onInquire={() => setCurrentPage('contact')}
      />
    </div>
  );
};

const GalleryPage = () => (
  <div className="pt-24 pb-20 bg-white min-h-screen">
    <div className="text-center mb-16 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 mt-8">Project Gallery</h1>
      <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
      <p className="text-slate-600 max-w-2xl mx-auto">A visual journey through our completed masterpieces and custom installations.</p>
    </div>

    <div className="container mx-auto px-4 md:px-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY.map((imgSrc, idx) => (
          <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
            <img 
              src={imgSrc} 
              alt={`Gallery Image ${idx + 1}`} 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                View Project
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-amber-600 tracking-[0.2em] uppercase text-sm font-bold">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2 mb-6">Visit Our Showroom</h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Whether you are looking for a ready-made murti or wish to commission a custom architectural piece, our experts are ready to assist you. Contact us today for a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <MapPinIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Factory & Showroom</h3>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <PhoneIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <MailIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-200 h-64 rounded-xl overflow-hidden relative shadow-inner flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-medium">Google Map Embed Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 h-fit">
            <h2 className="text-2xl font-serif text-slate-900 mb-8">Send an Inquiry</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <CheckCircleIcon size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for contacting Sahara Marble. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="+919252145887"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product/Requirements *</label>
                  <textarea 
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                    placeholder="Tell us about what you are looking for..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold tracking-wider uppercase hover:bg-amber-600 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Prevent background scrolling when a modal is open
  useEffect(() => {
    const hasModalOpen = document.querySelector('.fixed.inset-0.z-\\[100\\]');
    if (hasModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'products': return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'gallery': return <GalleryPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
